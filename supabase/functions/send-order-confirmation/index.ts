 import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
 import { Resend } from "resend";
 
 const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
 
 const corsHeaders = {
   "Access-Control-Allow-Origin": "*",
   "Access-Control-Allow-Headers":
     "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
 };
 
 interface OrderItem {
   product_name: string;
   product_price: number;
   quantity: number;
   selected_color?: string | null;
   selected_size?: string | null;
 }
 
 interface ShippingAddress {
   name: string;
   street: string;
   city: string;
   state: string;
   zip: string;
 }
 
 interface OrderConfirmationRequest {
   orderId: string;
   email: string;
   customerName: string;
   items: OrderItem[];
   shippingAddress: ShippingAddress;
   subtotal: number;
   shipping: number;
   tax: number;
   total: number;
 }
 
 const formatCurrency = (amount: number): string => {
   return new Intl.NumberFormat("en-US", {
     style: "currency",
     currency: "USD",
   }).format(amount);
 };
 
 const generateOrderItemsHtml = (items: OrderItem[]): string => {
   return items
     .map(
       (item) => `
       <tr>
         <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
           <strong>${item.product_name}</strong>
           ${item.selected_color || item.selected_size ? `<br><span style="color: #666; font-size: 14px;">${[item.selected_color, item.selected_size].filter(Boolean).join(" / ")}</span>` : ""}
         </td>
         <td style="padding: 12px 0; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
         <td style="padding: 12px 0; border-bottom: 1px solid #eee; text-align: right;">${formatCurrency(item.product_price * item.quantity)}</td>
       </tr>
     `
     )
     .join("");
 };
 
 const generateEmailHtml = (data: OrderConfirmationRequest): string => {
   const orderIdShort = data.orderId.slice(0, 8).toUpperCase();
   
   return `
     <!DOCTYPE html>
     <html>
       <head>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Order Confirmation</title>
       </head>
       <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
         <div style="background-color: #ffffff; border-radius: 8px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
           <!-- Header -->
           <div style="text-align: center; margin-bottom: 32px;">
             <h1 style="color: #111827; margin: 0 0 8px 0; font-size: 24px;">Order Confirmed!</h1>
             <p style="color: #6b7280; margin: 0;">Thank you for your purchase, ${data.customerName}</p>
           </div>
 
           <!-- Order ID -->
           <div style="background-color: #f3f4f6; border-radius: 6px; padding: 16px; text-align: center; margin-bottom: 24px;">
             <p style="margin: 0; color: #6b7280; font-size: 14px;">Order ID</p>
             <p style="margin: 4px 0 0 0; font-size: 20px; font-weight: bold; color: #111827; letter-spacing: 1px;">${orderIdShort}</p>
           </div>
 
           <!-- Order Items -->
           <h2 style="color: #111827; font-size: 18px; margin-bottom: 16px;">Order Details</h2>
           <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
             <thead>
               <tr style="border-bottom: 2px solid #e5e7eb;">
                 <th style="text-align: left; padding: 8px 0; color: #6b7280; font-weight: 600;">Item</th>
                 <th style="text-align: center; padding: 8px 0; color: #6b7280; font-weight: 600;">Qty</th>
                 <th style="text-align: right; padding: 8px 0; color: #6b7280; font-weight: 600;">Price</th>
               </tr>
             </thead>
             <tbody>
               ${generateOrderItemsHtml(data.items)}
             </tbody>
           </table>
 
           <!-- Order Totals -->
           <div style="border-top: 2px solid #e5e7eb; padding-top: 16px; margin-bottom: 24px;">
             <table style="width: 100%;">
               <tr>
                 <td style="padding: 4px 0; color: #6b7280;">Subtotal</td>
                 <td style="padding: 4px 0; text-align: right;">${formatCurrency(data.subtotal)}</td>
               </tr>
               <tr>
                 <td style="padding: 4px 0; color: #6b7280;">Shipping</td>
                 <td style="padding: 4px 0; text-align: right;">${data.shipping === 0 ? "FREE" : formatCurrency(data.shipping)}</td>
               </tr>
               <tr>
                 <td style="padding: 4px 0; color: #6b7280;">Tax</td>
                 <td style="padding: 4px 0; text-align: right;">${formatCurrency(data.tax)}</td>
               </tr>
               <tr style="font-size: 18px; font-weight: bold;">
                 <td style="padding: 12px 0 0 0; color: #111827;">Total</td>
                 <td style="padding: 12px 0 0 0; text-align: right; color: #111827;">${formatCurrency(data.total)}</td>
               </tr>
             </table>
           </div>
 
           <!-- Shipping Address -->
           <h2 style="color: #111827; font-size: 18px; margin-bottom: 12px;">Shipping Address</h2>
           <div style="background-color: #f9fafb; border-radius: 6px; padding: 16px; margin-bottom: 24px;">
             <p style="margin: 0; color: #374151;">
               ${data.shippingAddress.name}<br>
               ${data.shippingAddress.street}<br>
               ${data.shippingAddress.city}, ${data.shippingAddress.state} ${data.shippingAddress.zip}
             </p>
           </div>
 
           <!-- Footer -->
           <div style="text-align: center; border-top: 1px solid #e5e7eb; padding-top: 24px;">
             <p style="color: #6b7280; font-size: 14px; margin: 0;">
               Questions about your order? Contact us at support@rioshop.com
             </p>
             <p style="color: #9ca3af; font-size: 12px; margin-top: 16px;">
               © 2026 RioShop. All rights reserved.
             </p>
           </div>
         </div>
       </body>
     </html>
   `;
 };
 
 const handler = async (req: Request): Promise<Response> => {
   // Handle CORS preflight requests
   if (req.method === "OPTIONS") {
     return new Response(null, { headers: corsHeaders });
   }
 
   try {
     const data: OrderConfirmationRequest = await req.json();
     console.log("Sending order confirmation email for order:", data.orderId);
 
     // Validate required fields
     if (!data.email || !data.orderId || !data.items || data.items.length === 0) {
       throw new Error("Missing required fields: email, orderId, or items");
     }
 
     const emailHtml = generateEmailHtml(data);
 
     const emailResponse = await resend.emails.send({
       from: "RioShop <onboarding@resend.dev>", // Replace with your verified domain
       to: [data.email],
       subject: `Order Confirmed - #${data.orderId.slice(0, 8).toUpperCase()}`,
       html: emailHtml,
     });
 
     console.log("Order confirmation email sent successfully:", emailResponse);
 
     return new Response(JSON.stringify({ success: true, data: emailResponse }), {
       status: 200,
       headers: { "Content-Type": "application/json", ...corsHeaders },
     });
   } catch (error: any) {
     console.error("Error sending order confirmation email:", error);
     return new Response(
       JSON.stringify({ success: false, error: error.message }),
       {
         status: 500,
         headers: { "Content-Type": "application/json", ...corsHeaders },
       }
     );
   }
 };
 
 serve(handler);
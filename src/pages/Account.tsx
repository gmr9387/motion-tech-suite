 import { useState, useEffect } from "react";
 import { useNavigate } from "react-router-dom";
 import { User, MapPin, Settings, Plus, Trash2, Edit2, Save, X } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
 import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
 import { Switch } from "@/components/ui/switch";
 import { Header } from "@/components/Header";
 import { Footer } from "@/components/Footer";
 import { SEO } from "@/components/SEO";
 import { useAuth } from "@/contexts/AuthContext";
 import { supabase } from "@/integrations/supabase/client";
 import { useToast } from "@/hooks/use-toast";
 
 interface Address {
   id: string;
   label: string | null;
   street: string;
   city: string;
   state: string;
   zip: string;
   country: string;
   is_default: boolean | null;
 }
 
 const Account = () => {
   const { user, profile, loading, updateProfile, signOut } = useAuth();
   const navigate = useNavigate();
   const { toast } = useToast();
   
   // Profile state
   const [fullName, setFullName] = useState("");
   const [phone, setPhone] = useState("");
   const [isEditingProfile, setIsEditingProfile] = useState(false);
   const [isSavingProfile, setIsSavingProfile] = useState(false);
   
   // Addresses state
   const [addresses, setAddresses] = useState<Address[]>([]);
   const [isLoadingAddresses, setIsLoadingAddresses] = useState(true);
   const [editingAddressId, setEditingAddressId] = useState<string | null>(null);
   const [isAddingAddress, setIsAddingAddress] = useState(false);
   
   // New address form
   const [newAddress, setNewAddress] = useState({
     label: "",
     street: "",
     city: "",
     state: "",
     zip: "",
     country: "United States",
     is_default: false,
   });
 
   useEffect(() => {
     if (!loading && !user) {
       navigate("/auth");
     }
   }, [user, loading, navigate]);
 
   useEffect(() => {
     if (profile) {
       setFullName(profile.full_name || "");
       setPhone(profile.phone || "");
     }
   }, [profile]);
 
   useEffect(() => {
     if (user) {
       fetchAddresses();
     }
   }, [user]);
 
   const fetchAddresses = async () => {
     if (!user) return;
     
     setIsLoadingAddresses(true);
     const { data, error } = await supabase
       .from("addresses")
       .select("*")
       .eq("user_id", user.id)
       .order("is_default", { ascending: false });
     
     if (!error && data) {
       setAddresses(data);
     }
     setIsLoadingAddresses(false);
   };
 
   const handleSaveProfile = async () => {
     setIsSavingProfile(true);
     const { error } = await updateProfile({
       full_name: fullName.trim() || null,
       phone: phone.trim() || null,
     });
     
     if (error) {
       toast({
         title: "Update failed",
         description: "Could not update your profile. Please try again.",
         variant: "destructive",
       });
     } else {
       toast({
         title: "Profile updated",
         description: "Your profile has been saved successfully.",
       });
       setIsEditingProfile(false);
     }
     setIsSavingProfile(false);
   };
 
   const handleAddAddress = async () => {
     if (!user) return;
     
     if (!newAddress.label || !newAddress.street || !newAddress.city || !newAddress.zip) {
       toast({
         title: "Incomplete address",
         description: "Please fill in all required fields.",
         variant: "destructive",
       });
       return;
     }
 
     const { error } = await supabase.from("addresses").insert({
       user_id: user.id,
       ...newAddress,
     });
 
     if (error) {
       toast({
         title: "Failed to add address",
         description: "Could not save your address. Please try again.",
         variant: "destructive",
       });
     } else {
       toast({ title: "Address added", description: "Your new address has been saved." });
       setNewAddress({
         label: "",
         street: "",
         city: "",
         state: "",
         zip: "",
         country: "United States",
         is_default: false,
       });
       setIsAddingAddress(false);
       fetchAddresses();
     }
   };
 
   const handleDeleteAddress = async (id: string) => {
     const { error } = await supabase.from("addresses").delete().eq("id", id);
     
     if (error) {
       toast({
         title: "Failed to delete",
         description: "Could not remove the address. Please try again.",
         variant: "destructive",
       });
     } else {
       toast({ title: "Address removed" });
       fetchAddresses();
     }
   };
 
   const handleSetDefaultAddress = async (id: string) => {
     if (!user) return;
     
     // First, unset all defaults
     await supabase
       .from("addresses")
       .update({ is_default: false })
       .eq("user_id", user.id);
     
     // Set the new default
     const { error } = await supabase
       .from("addresses")
       .update({ is_default: true })
       .eq("id", id);
     
     if (!error) {
       toast({ title: "Default address updated" });
       fetchAddresses();
     }
   };
 
   const handleSignOut = async () => {
     await signOut();
     navigate("/");
   };
 
   if (loading) {
     return (
       <div className="min-h-screen flex items-center justify-center">
         <div className="animate-pulse text-muted-foreground">Loading...</div>
       </div>
     );
   }
 
   if (!user) return null;
 
   return (
     <>
       <SEO title="My Account" description="Manage your account settings, personal information, and saved addresses." />
       <Header 
         onCategorySelect={() => {}} 
         selectedCategory="All" 
         searchQuery="" 
         onSearchChange={() => {}} 
       />
       
       <main className="min-h-screen bg-background pt-24 pb-16">
         <div className="container max-w-4xl mx-auto px-4">
           <h1 className="text-3xl font-bold mb-8">My Account</h1>
           
           <Tabs defaultValue="profile" className="space-y-6">
             <TabsList className="grid w-full grid-cols-3">
               <TabsTrigger value="profile" className="flex items-center gap-2">
                 <User className="h-4 w-4" />
                 <span className="hidden sm:inline">Profile</span>
               </TabsTrigger>
               <TabsTrigger value="addresses" className="flex items-center gap-2">
                 <MapPin className="h-4 w-4" />
                 <span className="hidden sm:inline">Addresses</span>
               </TabsTrigger>
               <TabsTrigger value="settings" className="flex items-center gap-2">
                 <Settings className="h-4 w-4" />
                 <span className="hidden sm:inline">Settings</span>
               </TabsTrigger>
             </TabsList>
 
             {/* Profile Tab */}
             <TabsContent value="profile">
               <Card>
                 <CardHeader>
                   <CardTitle>Personal Information</CardTitle>
                   <CardDescription>Update your personal details</CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-4">
                   <div>
                     <Label className="text-muted-foreground">Email</Label>
                     <p className="text-foreground">{user.email}</p>
                   </div>
                   
                   <div className="space-y-2">
                     <Label htmlFor="fullName">Full Name</Label>
                     <Input
                       id="fullName"
                       value={fullName}
                       onChange={(e) => setFullName(e.target.value)}
                       disabled={!isEditingProfile}
                       placeholder="Enter your full name"
                     />
                   </div>
                   
                   <div className="space-y-2">
                     <Label htmlFor="phone">Phone Number</Label>
                     <Input
                       id="phone"
                       value={phone}
                       onChange={(e) => setPhone(e.target.value)}
                       disabled={!isEditingProfile}
                       placeholder="Enter your phone number"
                     />
                   </div>
                   
                   <div className="flex gap-3 pt-4">
                     {isEditingProfile ? (
                       <>
                         <Button onClick={handleSaveProfile} disabled={isSavingProfile}>
                           <Save className="h-4 w-4 mr-2" />
                           {isSavingProfile ? "Saving..." : "Save Changes"}
                         </Button>
                         <Button variant="outline" onClick={() => {
                           setIsEditingProfile(false);
                           setFullName(profile?.full_name || "");
                           setPhone(profile?.phone || "");
                         }}>
                           <X className="h-4 w-4 mr-2" />
                           Cancel
                         </Button>
                       </>
                     ) : (
                       <Button variant="outline" onClick={() => setIsEditingProfile(true)}>
                         <Edit2 className="h-4 w-4 mr-2" />
                         Edit Profile
                       </Button>
                     )}
                   </div>
                 </CardContent>
               </Card>
             </TabsContent>
 
             {/* Addresses Tab */}
             <TabsContent value="addresses">
               <Card>
                 <CardHeader className="flex flex-row items-center justify-between">
                   <div>
                     <CardTitle>Saved Addresses</CardTitle>
                     <CardDescription>Manage your shipping addresses</CardDescription>
                   </div>
                   {!isAddingAddress && (
                     <Button onClick={() => setIsAddingAddress(true)} size="sm">
                       <Plus className="h-4 w-4 mr-2" />
                       Add Address
                     </Button>
                   )}
                 </CardHeader>
                 <CardContent className="space-y-4">
                   {/* Add New Address Form */}
                   {isAddingAddress && (
                     <div className="border rounded-lg p-4 space-y-4 bg-muted/30">
                       <h4 className="font-medium">New Address</h4>
                       <div className="grid gap-4 sm:grid-cols-2">
                         <div>
                           <Label htmlFor="label">Label *</Label>
                           <Input
                             id="label"
                             value={newAddress.label}
                             onChange={(e) => setNewAddress({ ...newAddress, label: e.target.value })}
                             placeholder="e.g., Home, Work"
                           />
                         </div>
                         <div>
                           <Label htmlFor="country">Country</Label>
                           <Input
                             id="country"
                             value={newAddress.country}
                             onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })}
                           />
                         </div>
                       </div>
                       <div>
                         <Label htmlFor="street">Street Address *</Label>
                         <Input
                           id="street"
                           value={newAddress.street}
                           onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                           placeholder="123 Main St"
                         />
                       </div>
                       <div className="grid gap-4 sm:grid-cols-3">
                         <div>
                           <Label htmlFor="city">City *</Label>
                           <Input
                             id="city"
                             value={newAddress.city}
                             onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                           />
                         </div>
                         <div>
                           <Label htmlFor="state">State</Label>
                           <Input
                             id="state"
                             value={newAddress.state}
                             onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                           />
                         </div>
                         <div>
                         <Label htmlFor="postal">Postal Code *</Label>
                         <Input
                           id="postal"
                           value={newAddress.zip}
                           onChange={(e) => setNewAddress({ ...newAddress, zip: e.target.value })}
                         />
                         </div>
                       </div>
                       <div className="flex items-center gap-2">
                         <Switch
                           checked={newAddress.is_default}
                           onCheckedChange={(checked) => setNewAddress({ ...newAddress, is_default: checked })}
                         />
                         <Label>Set as default address</Label>
                       </div>
                       <div className="flex gap-3">
                         <Button onClick={handleAddAddress}>Save Address</Button>
                         <Button variant="outline" onClick={() => setIsAddingAddress(false)}>Cancel</Button>
                       </div>
                     </div>
                   )}
 
                   {/* Address List */}
                   {isLoadingAddresses ? (
                     <p className="text-muted-foreground">Loading addresses...</p>
                   ) : addresses.length === 0 ? (
                     <p className="text-muted-foreground text-center py-8">No saved addresses yet.</p>
                   ) : (
                     <div className="space-y-3">
                       {addresses.map((address) => (
                         <div
                           key={address.id}
                           className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                         >
                           <div>
                             <div className="flex items-center gap-2">
                               <span className="font-medium">{address.label}</span>
                               {address.is_default && (
                                 <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                                   Default
                                 </span>
                               )}
                             </div>
                             <p className="text-sm text-muted-foreground mt-1">
                               {address.street}, {address.city}, {address.state} {address.zip}
                             </p>
                             <p className="text-sm text-muted-foreground">{address.country}</p>
                           </div>
                           <div className="flex gap-2">
                             {!address.is_default && (
                               <Button
                                 variant="outline"
                                 size="sm"
                                 onClick={() => handleSetDefaultAddress(address.id)}
                               >
                                 Set Default
                               </Button>
                             )}
                             <Button
                               variant="ghost"
                               size="sm"
                               onClick={() => handleDeleteAddress(address.id)}
                               className="text-destructive hover:text-destructive"
                             >
                               <Trash2 className="h-4 w-4" />
                             </Button>
                           </div>
                         </div>
                       ))}
                     </div>
                   )}
                 </CardContent>
               </Card>
             </TabsContent>
 
             {/* Settings Tab */}
             <TabsContent value="settings">
               <Card>
                 <CardHeader>
                   <CardTitle>Account Settings</CardTitle>
                   <CardDescription>Manage your account preferences</CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-6">
                   <div className="flex items-center justify-between">
                     <div>
                       <p className="font-medium">Email Notifications</p>
                       <p className="text-sm text-muted-foreground">Receive order updates and promotions</p>
                     </div>
                     <Switch defaultChecked />
                   </div>
                   
                   <div className="flex items-center justify-between">
                     <div>
                       <p className="font-medium">Marketing Emails</p>
                       <p className="text-sm text-muted-foreground">Receive news about new products and sales</p>
                     </div>
                     <Switch />
                   </div>
 
                   <div className="pt-6 border-t">
                     <h4 className="font-medium text-destructive mb-4">Danger Zone</h4>
                     <Button variant="destructive" onClick={handleSignOut}>
                       Sign Out
                     </Button>
                   </div>
                 </CardContent>
               </Card>
             </TabsContent>
           </Tabs>
         </div>
       </main>
       
       <Footer />
     </>
   );
 };
 
 export default Account;
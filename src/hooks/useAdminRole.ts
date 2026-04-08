import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

export const useAdminRole = () => {
  const { user, loading: authLoading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setIsAdmin(false);
      setLoading(false);
      return;
    }

    const checkAdmin = async () => {
      // Use raw SQL via rpc or direct rest call since user_roles may not be in generated types yet
      const { data, error } = await supabase
        .rpc('has_role', { _user_id: user.id, _role: 'admin' });

      setIsAdmin(!error && data === true);
      setLoading(false);
    };

    checkAdmin();
  }, [user, authLoading]);

  return { isAdmin, loading: loading || authLoading };
};

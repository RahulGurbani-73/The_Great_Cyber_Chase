/* Public browser configuration only. RLS protects database reads; admin secrets stay in Edge Functions. */
(() => {
  const url = "https://ghumlrfitemegxensdog.supabase.co";
  const publishableKey = "sb_publishable_dVvqsLEZYaJCiEp3XX5Jjw_-8vvxDjt";
  if (!window.supabase?.createClient) {
    window.NFSUCloudError = "Supabase library did not load. Check your internet connection and reload.";
    return;
  }
  window.NFSUSupabase = window.supabase.createClient(url, publishableKey, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
  });
})();

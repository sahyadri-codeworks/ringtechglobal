// WARNING: Replace these with your actual Supabase Project URL and Anon Key.
// You can find them in your Supabase Dashboard -> Project Settings -> API
const SUPABASE_URL = 'https://xxjljkirxnqbzpnwvgbs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4amxqa2lyeG5xYnpwbnd2Z2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NDY4NTksImV4cCI6MjA5MzAyMjg1OX0.pxFm2Mm36vGK8H2eAtC9OnD60Wcg72Pa95wcdMyCjLY';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

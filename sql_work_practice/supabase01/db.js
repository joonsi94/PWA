import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hgjwdtncrblyqqolxccl.supabase.co";
const supabasePassword = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnandkdG5jcmJseXFxb2x4Y2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwOTksImV4cCI6MjA1NTAwMTA5OX0.EDd3z4V0e_PiGmj9LgKHQslIeUQVDEXr3X-yTwt6ORE";

const supabase = createClient(supabaseUrl, supabasePassword);

export async function user_select() {
    const res = await supabase.from('users').select();
    console.log(res);
}
export async function user_insert(name, email) {
    const res = await supabase
        .from('users')
        .insert([{ name, email }]);
    console.log(res);
}
export async function user_update(name, email) {
    const res = await supabase
        .from('users')
        .update({ name })
        .eq('email', email);
    console.log(res);
}
export async function user_delete(email) {
    const res = await supabase
        .from('users')
        .delete()
        .eq('email', email);
    console.log(res);
}
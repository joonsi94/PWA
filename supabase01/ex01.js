//require() => commonjs BackEnd
//import from => module.js FrontEnd

import { createInterface } from "readline/promises";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hgjwdtncrblyqqolxccl.supabase.co";
const supabasePassword = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnandkdG5jcmJseXFxb2x4Y2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwOTksImV4cCI6MjA1NTAwMTA5OX0.EDd3z4V0e_PiGmj9LgKHQslIeUQVDEXr3X-yTwt6ORE";

const supabase = createClient(supabaseUrl, supabasePassword);

const res = await supabase.from('users').select();
console.log(res);

// const res = await supabase
//                 .from('users')
//                 .insert([{name: 'aaa', email: 'aaa@naver.com'}]);
// console.log(res);
// const {status, statusText} = res;
// console.log(status);
// console.log(statusText);

// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const name = await rl.question('이름 뭐야??');
// console.log(`name ${name}`);

// rl.close();
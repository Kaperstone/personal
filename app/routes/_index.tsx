import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <table className="w-screen">
      <tbody>

        <tr>
          <td className="w-[20vw] h-64 p-4">
            <div className="w-full rounded-lg h-full p-4 border border-zinc-400">
              <p>I'm Kirill (Kaperstone),</p><p>a web developer</p>
              <br />
              <p>Passionate about the web, coding since I was 14.</p>
              <br />
              <p>Everything from databases, backend to frontend.</p>
            </div>
          </td>
          <td className="h-64 p-4" colSpan={3}>
            <div className="w-full rounded-lg bg-zinc-200 h-full border border-zinc-400 pt-4 p-4">
              <h4># Latest Blog Posts</h4>
              <ul className="pt-2">
                <li className="inline-block align-top h-44 w-64 p-4 rounded-lg bg-black/10">Civil Engineering</li>
              </ul>
            </div>
          </td>
        </tr>
        <tr>
          <td className="" colSpan={4}>
            <h2 className="px-4 font-bold text-2xl">My Work</h2>
            <div className="px-2 mt-1 w-screen whitespace-normal break-word select-none">
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">React</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Vue.js</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Svelte</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Angular</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Go</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Rust</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Python</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Postgresql</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Redis</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">PHP</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Cassandra</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Socket.io</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Tailwind</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Scala</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Pony</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Zig</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Ruby on Rails</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Remix</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Next.js</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Redux</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Nuxt.js</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Typescript</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Firebase</div>
              <div className="inline-block align-top mx-2 my-1 px-2 bg-zinc-200 rounded py-0.5 hover:bg-zinc-400">Supabase</div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="w-[20vw] h-[20vw] p-4">
            <div className="relative w-full rounded-2xl h-full overflow-hidden border border-zinc-400">
              <div className="relative bg-zinc-400 overflow-hidden h-[20vw]">
                <div className="absolute bottom-0 left-0 w-full" style={{ boxShadow: "0 0 5rem 2rem black" }}></div>
                <div className="absolute bottom-0 left-0 w-full p-2">
                  <h2 className="font-bold text-white">Dahan Pro-Center</h2>
                </div>
              </div>
              <div className="p-2">
                <div className="inline-block align-top text-sm bg-zinc-200 px-1 rounded mr-1">Svelte</div>
                <div className="inline-block align-top text-sm bg-zinc-200 px-1 rounded mr-1">PostgreSQL</div>
                <div className="inline-block align-top text-sm bg-zinc-200 px-1 rounded mr-1">Tailwind</div>
                <div className="inline-block align-top text-sm bg-zinc-200 px-1 rounded mr-1">Pug</div>
                <div className="inline-block align-top text-sm bg-zinc-200 px-1 rounded mr-1">font-awesome</div>
                <div className="inline-block align-top text-sm bg-zinc-200 px-1 rounded mr-1">keen-slider</div>
                <div className="inline-block align-top text-sm bg-zinc-200 px-1 rounded mr-1">dayjs</div>
                <div className="inline-block align-top text-sm bg-zinc-200 px-1 rounded mr-1">sass</div>
                <div className="inline-block align-top text-sm bg-zinc-200 px-1 rounded mr-1">tiptap</div>
                <div className="inline-block align-top text-sm bg-zinc-200 px-1 rounded mr-1">Supabase</div>
              </div>
              <div>
                <button className="px-2 h-8 bg-blue-500 text-white w-1/3">GitHub</button>
                <button className="px-2 h-8 bg-rose-500 text-white w-1/3">Desktop</button>
                <button className="px-2 h-8 bg-green-500 text-white w-1/3">Mobile</button>
              </div>
            </div>
          </td>
          <td className="w-[20vw] h-[20vw] p-4">
            <div className="relative w-full rounded-2xl bg-zinc-400 h-full overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full" style={{ boxShadow: "0 0 5rem 2rem black" }}></div>
              <div className="absolute bottom-0 left-0 w-full p-2">
                <h2 className="font-bold text-white">Yad2</h2>
              </div>
            </div>
          </td>
          <td className="w-[20vw] h-[20vw] p-4">
            <div className="relative w-full rounded-2xl bg-zinc-400 h-full overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full" style={{ boxShadow: "0 0 5rem 2rem black" }}></div>
              <div className="absolute bottom-0 left-0 w-full p-2">
                <h2 className="font-bold text-white">Salary Calculator</h2>
              </div>
            </div>
          </td>
          <td className="w-[20vw] h-[20vw] p-4">
            <div className="relative w-full rounded-2xl bg-zinc-400 h-full overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full" style={{ boxShadow: "0 0 5rem 2rem black" }}></div>
              <div className="absolute bottom-0 left-0 w-full p-2">
                <h2 className="font-bold text-white">AY.KE</h2>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="w-[20vw] h-[20vw] p-4">
            <div className="relative w-full rounded-2xl bg-zinc-400 h-full overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full" style={{ boxShadow: "0 0 5rem 2rem black" }}></div>
              <div className="absolute bottom-0 left-0 w-full p-2">
                <h2 className="font-bold text-white">Twiddle</h2>
              </div>
            </div>
          </td>
          <td className="w-[20vw] h-[20vw] p-4">
            <div className="relative w-full rounded-2xl bg-zinc-400 h-full overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full" style={{ boxShadow: "0 0 5rem 2rem black" }}></div>
              <div className="absolute bottom-0 left-0 w-full p-2">
                <h2 className="font-bold text-white">JobTitle</h2>
              </div>
            </div>
          </td>
          <td className="w-[20vw] h-[20vw] p-4">
            <div className="relative w-full rounded-2xl bg-zinc-400 h-full overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full" style={{ boxShadow: "0 0 5rem 2rem black" }}></div>
              <div className="absolute bottom-0 left-0 w-full p-2">
                <h2 className="font-bold text-white">Freya</h2>
              </div>
            </div>
          </td>
          <td className="w-[20vw] h-[20vw] p-4">
            <div className="relative w-full rounded-2xl bg-zinc-400 h-full overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full" style={{ boxShadow: "0 0 5rem 2rem black" }}></div>
              <div className="absolute bottom-0 left-0 w-full p-2">
                <h2 className="font-bold text-white">webmini.tv</h2>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
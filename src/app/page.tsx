import Image from "next/image";
import 'tailwindcss/tailwind.css'
import {Fragment} from "react";
import axios from "axios";

export default async function Home() {

  const response = await axios.get('https://mastodon.social/api/v1/timelines/tag/jobs?any=hiring');
  const data = response.data;

  return (

      <Fragment>
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Layoff are not end of the world. Find your next tribe!!</h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400  divide-y divide-gray-200">

          { data.map((item: any) => {
            return(
                <li>
                  <p> <b> {item['account']['username']}</b> </p>
                  <p dangerouslySetInnerHTML={{
                    __html: item['content']
                  }}
                  >
                  </p>
                </li>
            )
          })}
        </ul>
      </Fragment>
  )
}

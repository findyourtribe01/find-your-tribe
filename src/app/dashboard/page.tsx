import axios from "axios";

export default async function Page() {
    const response = await axios.get('https://mastodon.social/api/v1/timelines/tag/jobs?any=hiring');
    const data = response.data;

    return(
        <div>
            Hello, Dasboard
            { data.map((item: any) => {
              return(
                  <a>id: { item['id'] }</a>
              )
            })}
       </div>)
}
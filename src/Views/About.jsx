export default function About({data}) {
  return (
    <div className="h-screen p-4  text-[var(--text-color)] flex items-center flex-col md:justify-center">
      <div className="text-head font-bold">ABOUT ME</div>
        <div className="m-4 shadow-lg rounded w-full h-full p-5 flex flex-col md:h-2/3 md:flex-row">
          <div className="w-full overflow-hidden ">
             <img src="/me.png" alt="mypic"className="rounded-lg shadow-lg" />
          </div>
          <div className="w-full p-4 flex flex-col md:text-lg ">
              <div>{data.name}</div>
              <div>{data.university}</div>
              <div className="underline font-bold">Interested in</div>
              {data.interests.map(d=>
                <div key={d}>{d}</div>
              )}
              <div className="flex h-full flex-col border-t mt-3 pt-3 "> 
                <span className="font-bold  "><a className="hover:underline" href={data.contacts.fb} target="blank">Facebook{">"}</a></span>
                <span className="font-bold "><a className="hover:underline" href={data.contacts.github} target="blank">Github{">"}</a></span>
                <span>062-776-8686</span>
                <span>{data.contacts.gmail}</span>
              </div>
          </div>
      </div>
    </div>
  );
}
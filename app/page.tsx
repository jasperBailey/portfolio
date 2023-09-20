import ShortProjects from "@/components/organisms/ShortProjects";

export default function Home() {
  return (
    <>
      <section id="About">
        <h3 className="lg:hidden">About</h3>

        <p className="mb-3">
          Earlier this year I decided to commit to becoming a software developer
          professionally, and undertook a 16-week intensive course with
          CodeClan, a well-respected player in the Scottish tech scene (alas,
          now in administration).
        </p>

        <p className="mb-3">
          In that time I learnt a whole heck of a lot of stuff, from raw
          programming languages and frameworks to testing suites and DevOps. All
          this was put into practice through some independent projects, both
          solo and as part of a group, using Agile methodology.
        </p>
      </section>
      
      <ShortProjects />
    </>
    /*
        <p>
          Unfortunately they changed the rate limit for the Taddy Podcast API after we made this - so if the search stops working, then I'm sorry! Too many people must be looking at it, and I don't want to buy a more expensive API key.

          This was originally designed to be locally hosted, as we had only been learning JavaScript for 3 weeks at the time and hadn't covered web hosting yet.
        </p> */
  );
}

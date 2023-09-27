import ShortProject from "@/components/organisms/ShortProject";

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

        <p>
          I usually spend my free time hanging out with my partner, making
          music, running at the track, or playing Dota 2 (sometimes even
          competitively).
        </p>
      </section>

      <section>
        <h3>Projects</h3>
        <ul>
          <ShortProject
            title="Portfolio website"
            year="2023"
            summary="You're looking at it! Simple app built from scratch in Next.js, and deployed with Vercel."
            previewImg={process.env.PUBLIC_URL + "recursion.jpg"}
            techs={["Next.js", "Vercel", "Tailwind"]}
            githubUrl="https://github.com/jasperBailey/portfolio"
          />
          <ShortProject
            title="JobShark"
            year="2023"
            summary="A Next.js webapp to find jobs, and track your applications, hosted on Vercel. Backend is a Spring Boot API which was hosted on Azure, and an SQL DB hosted on render.com. Both backend and frontend use Auth0 authentication."
            previewImg={process.env.PUBLIC_URL + "jobshark.jpg"}
            techs={[
              "JavaScript",
              "Java",
              "Next.js",
              "Spring Boot",
              "Auth0",
              "Tailwind",
              "Vercel",
              "Azure",
              "PostgreSQL",
            ]}
            githubUrl="https://github.com/jasperBailey/jobsharkbackend"
          />
          <ShortProject
            title="CodeCast"
            year="2023"
            summary="A React webapp to browse, listen to, and collate podcast episodes. Backend is an Express API and a MongoDB database. Also uses the Taddy Podcast API, which has unfortunately changed its free rate limit now..."
            previewImg={process.env.PUBLIC_URL + "codecast.jpg"}
            techs={["React", "Express", "MongoDB", "Styled Components"]}
            githubUrl="https://github.com/jasperBailey/PodcastProject"
          />
          <ShortProject
            title="The Impractical Beep Boop Maker"
            year="2023"
            summary="A basic webapp that lets the user create an mp3 from manually inputted MIDI notes. We were expressly forbidden from using any kind of JavaScript - it's just HTML, a Flask API, and an SQL database."
            previewImg={process.env.PUBLIC_URL + "tibbm.jpg"}
            techs={["Python", "Flask", "HTML", "CSS", "PostgreSQL"]}
            githubUrl="https://github.com/jasperBailey/python_project"
          />
        </ul>
      </section>
    </>
  );
}

import meImg from '../../assets/me.jpg';

const About = () => {
  return (
    <div className="md:max-w-[650px] max-w-full mx-auto">
      <article>
        <div className="text-center">
          <h3 className="font-display text-2xl text-green-400">About Me</h3>
          <img
            className="rounded-full mx-auto my-2"
            src={meImg}
            alt="a picture of ian hart with a frozen lake in the background"
          />
        </div>
        <section className="rounded p-2 bg-slate-900">
          <p className="leading-7 my-2">
            I'm a Web Developer from central New Hampshire. Before I got into creating websites and applications, I was
            a professional snowboarder. I started competing around the East Coast of the US and eventually started to
            compete in international competitions as well as starring in snowboard films.
          </p>
          <p className="leading-7 my-2">
            Computers have always been a passion of mine which led me to becoming a web developer. Some people seem to
            link creativty with art, music, dance, etc. For myself, with programming I can show my creativity by
            building something that has the possibility to be used by other people and I think that is pretty awesome.
          </p>
        </section>
      </article>
    </div>
  );
};

export default About;

// App Component

function App() {
  const assets = {
    daniel: "./images/image-daniel.jpg",
    jonathan: "./images/image-jonathan.jpg",
    jeanette: "./images/image-jeanette.jpg",
    patrick: "./images/image-patrick.jpg",
    kira: "./images/image-kira.jpg",
    quote: "./images/bg-pattern-quotation.svg",
  };
  return (
    <>
      <main className="main">
        <section className="card one | bg-purple fc-white">
          <img src={assets.quote} alt="" className="quote" />
          <div className="card-wrapper">
            <div className="author">
              <img src={assets.daniel} alt="" />
              <div className="name">
                <p>Daniel Clifford</p>
                <p className="op50 fs-11">Verified Graduate</p>
              </div>
            </div>
            <p className="fs-20">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</p>
            <p className="fc-lt-gray op70">“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
          </div>
        </section>
        <section className="card two | bg-gray fc-white">
          <div className="card-wrapper">
            <div className="author">
              <img src={assets.jonathan} alt="" />
              <div className="name">
                <p>Jonathan Walters</p>
                <p className="op50 fs-11">Verified Graduate</p>
              </div>
            </div>
            <p className="fs-20">The team was very supportive and kept me motivated</p>
            <p className="op70">“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “</p>
          </div>
        </section>
        <section className="card three | bg-white">
          <div className="card-wrapper">
            <div className="author">
              <img src={assets.jeanette} alt="" />
              <div className="name">
                <p>Jeanette Harmon</p>
                <p className="op50 fs-11">Verified Graduate</p>
              </div>
            </div>
            <p className="fs-20">An overall wonderful and rewarding experience</p>
            <p className="op70">“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
          </div>
        </section>
        <section className="card four | bg-dark fc-white">
          <div className="card-wrapper">
            <div className="author">
              <img src={assets.patrick} alt="" />
              <div className="name">
                <p>Patrick Abrams</p>
                <p className="op50 fs-11">Verified Graduate</p>
              </div>
            </div>
            <p className="fs-20">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</p>
            <p className="op70">“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”</p>
          </div>
        </section>
        <section className="card five | bg-white">
          <div className="card-wrapper">
            <div className="author">
              <img src={assets.kira} alt="" />
              <div className="name">
                <p>Kira Whittle</p>
                <p className="op50 fs-11">Verified Graduate</p>
              </div>
            </div>
            <p className="fs-20">Such a life-changing experience. Highly recommended!</p>
            <p className="op70">
              “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a
              way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

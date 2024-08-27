

function About() {
    return (
        <div className="">
            <h2 className="font-bold text-4xl ml-[32px]">About Me</h2>
            <div className="md:w-[700px] md:m-[32px] mx-[12px] mb-[48px] mt-[32px]">
                <div style={{ overflowY: 'auto', height: 'calc(95vh - 325px)',scrollbarWidth: "1px", msOverflowStyle: 'none' }} className="w-full p-5">
                    <p>Hey, I'm Viswiesh.</p>
                    <p>I'm currently studying B.Tech CSBS at Sastra University, Tanjore. I love to explore many ideas from my friends and professors.</p>
                    <br></br>
                    <hr className="about-line"></hr>
                    <br></br>
                    <p>I'm passionate about many creative pursuits, including music, photography, and of course, coding. This combination of interests is what ultimately led me to create projects on my own.</p>
                    <br />
                    <p>I love building for the web. From something as simple as a single HTML file – all the way to large web applications. The web is incredible. Anyone can become a developer, writer, or creator – and no one has to ask for permission. You can just build.</p>
                    <br />
                    <hr className="about-line"></hr>
                    <br />
                    <p>Apart from Web development, I am also good at problem solving. I have participated in many hackathons, contests and many more. I am proficient in Java, C++, C and Python. I have completed solving nearly 300 problems in leetcode platform</p>
                    <br />
                    <hr className="about-line"></hr>
                    <br />
                    <p>I have applied my skills as a web developer in various professional settings, contributing to the creation of robust and user-friendly websites. My experience includes developing intuitive user interfaces, implementing responsive designs, and optimizing site performance. I am adept at leveraging technologies such as HTML, CSS, JavaScript, and frameworks like React and Node.js to deliver compelling digital experiences. I thrive in collaborative environments, where I have honed my ability to translate client requirements into effective technical solutions.</p>
                </div>
            </div>

        </div>
    )
}

export default About;
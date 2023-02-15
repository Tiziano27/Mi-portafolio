import React from "react";
import "../hojas-de-estilos/about.css";
import { useState, useEffect } from "react";

function About() {
  const [rodar, setrodar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setrodar(true);
      } else {
        setrodar(false);
      }
    };

    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={rodar ? "rodar active" : "rodar"}>
      <div id="about" className="about">
        <div className="content">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <span className="len">
              HTML, CSS, React, JavaScript, Bootstrap
            </span>{" "}
            consectetur adipiscing elit. Nullam congue sagittis ante, a
            tincidunt diam vehicula vel. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Fusce non diam metus. In imperdiet sagittis tortor
            id porttitor. Morbi nisl arcu, auctor vitae posuere non, dictum id
            eros. Morbi vel velit aliquet, placerat odio a, vehicula ipsum.
            Etiam sagittis aliquam molestie. Aenean ante tortor, sagittis eget
            malesuada eget, ultricies et lacus. Pellentesque eu tincidunt
            ligula, quis luctus felis. Nam eu eros et dui suscipit rutrum.
            Pellentesque nec enim erat. Mauris porttitor, orci a rutrum
            consectetur, nisl mauris ullamcorper lacus, tincidunt ultrices diam
            purus ut sapien. Pellentesque quis porttitor velit. Mauris sit amet
            consequat odio. Morbi ac ultrices tellus. Integer et lorem id magna
            accumsan consectetur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

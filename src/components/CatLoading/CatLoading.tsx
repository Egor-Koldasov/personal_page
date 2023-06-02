import { CatLoadingCss } from "./CatLoadingCss"

export const LoadingCat = () => {
  return (
    <div id="loading-cat">
      <style dangerouslySetInnerHTML={{ __html: CatLoadingCss }} />

      <div className="loading-cat">
        <div className="cat-body"></div>
        <div className="cat-animation-mask"></div>
        <div className="cat-head">
          <div className="cat-face"></div>
          <div className="cat-ear"></div>
          <div className="cat-hand"></div>
          <div className="cat-eye"></div>
          <div className="cat-eye-light"></div>
          <div className="cat-mouth"></div>
          <div className="cat-beard left"></div>
          <div className="cat-beard right"></div>
        </div>
        <div className="cat-foot">
          <div className="cat-belly"></div>
          <div className="cat-leg"></div>
          <div className="cat-tail"></div>
        </div>
      </div>
      <blockquote>
        Copied from :{" "}
        <a
          href="https://codepen.io/touneko/pen/ygOgWj"
          target="_blank"
          rel="noreferrer"
        >
          codepen
        </a>
      </blockquote>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          const catBox = document.getElementById('loading-cat');
          const catChildren = Array.from(catBox.children);
          const shadowClosed = catBox.attachShadow({ mode: "closed" });
          catChildren.map((catChild) => {
            shadowClosed.appendChild(catChild)
          })
          
          `,
        }}
      ></script>
    </div>
  )
}

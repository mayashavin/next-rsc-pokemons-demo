import Head from 'next/head'
// import Router from 'next/router'

export default function Meta() {
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
      </Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      :root {
        --page-background: '#2d3239';
        --page-title: #333;
        --page-text: #2c3e50;
        --page-sub-label-text: #757575;
      }

      h2 {
        margin: 0.83em 0;
      }

      h3 {
        margin: 1em 0;
      }
      h1 {
        color: currentColor;
        margin: 0;
        margin-inline-start: 10px;
      }
      html, body, .main, #__next {
        height: 100%;
        margin: 0;
        overflow: hidden;
      }
      .page {
        height: 100%;
        overflow: hidden;
      }
      .main {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: var(--page-text);
      }
      
      @media screen and (prefers-color-scheme: dark) {
        body {
          --page-background: #2d3239;
          --page-title: #e9d970;
          --page-text: #fff;
          --page-sub-label-text: #cfcfcf;
        }
      }
      body {
        background: var(--page-background);
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .spinner {
        margin: 12px;
        width: 28px;
        height: 28px;
        animation: spinner-rotating 1.2s infinite;
        animation-timing-function: steps(12, end);
      }
      .spinner:before {
        content: '';
        display: block;
        width: 4px;
        height: 4px;
        margin: 0;
        margin-left: 12px;
        border-radius: 50%;
        background: #888;
        color: #ccc;
        box-shadow:
          6px 1.61px,
          10.39px 6px,
          12px 12px,
          10.39px 18px,
          6px 22.39px,
          0 24px,
          -6px 1.61px #999,
          -10.39px 6px #aaa,
          -12px 12px #bbb,
          -10.39px 18px,
          -6px 22.39px;
      }
      @keyframes spinner-rotating {
        from { transform: rotate(0deg) }
        to { transform: rotate(360deg) }
      }
      .pokemon-gallery {
        height: 100%;
        list-style-type: none;
        padding-inline-start: 0px;
        margin-block-start: 0;
        overflow: auto;
        height: calc(100% - 140px);  
        padding: 10px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: baseline;
      }
      .pokemon-gallery-header {
        padding: 10px 0;
        font-size: 18px;
        text-transform: uppercase;
        background: var(--page-background);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        color: var(--page-text);
      }
      .pokemon-gallery--more-btn {
        position: fixed;
        bottom: 15px;
        right: 20px;
        background: var(--page-text);
        border-radius: 100%;
        padding: 8px;
        cursor: pointer;
        box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .78);
        z-index: 2;
        color: var(--page-background);
      }
      .pokemon-gallery--list-item--link {
        text-decoration: none;
        color: currentColor;
      }
      .pokemon-gallery-title {
        display: flex;
        justify-self: center;
        align-items: center;
      }
      .overlay {
        position: absolute;
      }
      .pokemon-gallery--list-item {
        margin: 10px;
        border-radius: 20px;
        overflow: hidden;
      }
      .item {
        display: flex;
        width: 322px;
        justify-content: space-around;
        position: relative;
        overflow: hidden;
        padding: 10px;
      }
      .item:hover {
        cursor: pointer;
      }
      .item--type {
        padding: 5px 15px;
        border: 1px solid #ff9481;
        width: fit-content;
        margin: 5px auto;
        border-radius: 20px;
        background: #ff9481;
        color: white;
      }
      .item--id {
        font-size: 16px;
        color: #ffffff94;
        text-align: right;
      }
      .item--weight {
        margin-block-start: 10px;
        display: block;
      }
      .item--name {
        text-transform: capitalize;
      }
      .item--avatar-info {
        z-index: 1;
      }
      .item .overlay {
        position: absolute;
        display: flex;
        bottom: -30px;
        right: -30px;
      }
      .meta {
        font-size: 12px;
      }
      .source {
        font-size: 12px;
        display: inline-block;
        margin-left: 5px;
      }
      .source a,
      .meta a {
        color: #828282;
        text-decoration: none;
      }
      .source a:hover,
      .meta a:hover {
        text-decoration: underline;
      }
      .item-skeleton {
        margin: 5px 0;
        overflow: hidden;
      }
      .item-skeleton:before, .item-skeleton:after {
        content: '';
        display: block;
        width: 350px;
        max-width: 100%;
        height: 16px;
        background: #eee;
        margin: 6px 0 2px;
        background-image: linear-gradient(270deg, #ccc, #eee, #eee, #ccc);
        background-size: 400% 100%;
        animation: highlight-rotating 8s ease infinite;
      }
      .item-skeleton:after {
        width: 250px;
        height: 10px;
        margin: 5px 0;
      }
      @keyframes highlight-rotating {
        from {
          background-position: 200% 0;
        }
        to {
          background-position: -200% 0;
        }
      }

      .chip {
        padding: 5px 15px;
        width: fit-content;
        margin: 5px;
        border-radius: 20px;
        background: rgba(247,242,242,.38);
        color: white;
        font-weight: bold;
        text-transform: capitalize;
      }
      
      .chip.sm {
        font-size: 12px;
      }
      .chip.md {
        font-size: 14px;
      }
      
    `,
        }}
      />
    </div>
  )
}

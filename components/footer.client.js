export default function Footer() {
  return (
    <div>
      <footer className="footer">
        Pokemon Demo - Server Component
      </footer>

      <style
        dangerouslySetInnerHTML={{
          __html: `
      .footer {
        padding: 10px 0px;
        color: #ccc;
        font-size: 14px;
        text-align: center;
        border-top: 1px solid;
        margin-top: 10px;
      }
    `,
        }}
      />
    </div>
  )
}

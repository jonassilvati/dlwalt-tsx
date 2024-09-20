import Script from "next/script";
import "../../public/plugins/bootstrap/bootstrap.min.css";
import "../../public/plugins/fontawesome/css/all.min.css";
import "../../public/plugins/animate-css/animate.css";
import "../../public/plugins/slick/slick.css";
import "../../public/plugins/slick/slick-theme.css";
import "../../public/plugins/colorbox/colorbox.css";
import "../../public/plugins/aos/aos.css";
import "../../public/plugins/fontawesome/font-awesome.min.css"
//import "../../public/plugins/leaflet/leaflet.css" tem + doq so esse CSS
import "../../public/css/style.css";

export const metadata = {
  title: "Energia Solar - D | Walt Engenharia",
  description:
    "Transforme a energia do sol em economia e sustentabilidade para o seu lar ou empresa! Descubra como a nossa empresa de energia solar pode ajudá-lo a reduzir seus custos de energia e contribuir para um futuro mais limpo e verde. Entre em contato conosco agora mesmo e comece a aproveitar os benefícios da energia solar!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Script src="https://momentjs.com/downloads/moment-with-locales.min.js" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-10800412438" />
        <Script id="gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            console.log("Script");

            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
      
            gtag("config", "AW-10800412438");
            `}
        </Script>
        <Script src="/plugins/jQuery/jquery.min.js" />
        <Script src="/plugins/colorbox/jquery.colorbox.js" />
        <Script src="/plugins/slick/slick.min.js" />
        <Script src="/plugins/slick/slick-animation.min.js" />
        <Script src="/plugins/bootstrap/bootstrap.min.js" />
        <Script src="/plugins/aos/aos.js" />
        <Script src="/plugins/shuffle/shuffle.min.js" />
        <Script src="/js/script.js" />
        <Script id="lead" strategy="afterInteractive">
          {`
           (function (n, r, l, d) {
            try {
              var h = r.head || r.getElementsByTagName("head")[0],
                s = r.createElement("script");
              s.defer = true;
              s.setAttribute("type", "text/javascript");
              s.setAttribute("src", l);
              n.neuroleadId = d;
              h.appendChild(s);
            } catch (e) {}
          })(
            window,
            document,
            "https://cdn.leadster.com.br/neurolead/neurolead.min.js",
            26058
          );
            `}
        </Script>
      </body>
    </html>
  );
}

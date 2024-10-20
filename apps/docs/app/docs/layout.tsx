import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { MessageCircle } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { baseOptions, linkItems, logo } from '@/app/layout.config';
import 'fumadocs-twoslash/twoslash.css';
import { source } from '@/app/source';
import { Trigger } from '@/components/ai/search-ai';
import { cn } from '@/utils/cn';
import { buttonVariants } from '@/components/ui/button';

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  nav: {
    ...baseOptions.nav,
    title: logo,
    children: (
      <Trigger
        className={cn(
          buttonVariants({
            variant: 'secondary',
            size: 'xs',
            className:
              'md:flex-1 px-2 ms-2 gap-1.5 text-fd-muted-foreground rounded-full',
          }),
        )}
      >
        <MessageCircle className="size-3" />
        Ask AI
      </Trigger>
    ),
  },
  links: [linkItems[linkItems.length - 1]],
  sidebar: {
    tabs: {
      transform(option, node) {
        const meta = source.getNodeMeta(node);
        if (!meta) return option;

        return {
          ...option,
          icon: (
            <Slot
              className="mb-auto bg-gradient-to-t from-fd-background/80 p-1 [&_svg]:size-5"
              style={{
                color: `hsl(var(--${meta.file.dirname}-color))`,
                backgroundColor: `hsl(var(--${meta.file.dirname}-color)/.3)`,
              }}
            >
              {node.icon}
            </Slot>
          ),
        };
      },
    },
  },
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <DocsLayout {...docsOptions}>
      <span
        className="absolute inset-0 z-[-1] h-[64rem] max-h-screen overflow-hidden"
        style={{
          backgroundImage:
            'radial-gradient(49.63% 57.02% at 58.99% -7.2%, hsl(var(--primary)/0.1) 39.4%, transparent 100%)',
        }}
      >
        <svg
          width="790"
          height="640"
          viewBox="0 0 790 718"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-16 left-1/2 -translate-x-1/2 pl-48"
        >
          <mask
            id="mask-dark"
            style={{
              maskType: 'alpha',
            }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="-143"
            width="936"
            height="861"
          >
            <ellipse
              cx="468.373"
              cy="287.536"
              rx="467.627"
              ry="430.464"
              fill="url(#radial-dark)"
            />
          </mask>
          <g mask="url(#mask-dark)" className="fill-primary">
            <path
              d="M506.419 281.855L446.417 297.931V359.885L506.419 343.71V281.855Z"
              fillOpacity="0.05"
            />
            <path
              d="M384.768 188.752L324.766 204.828V266.781L384.768 250.606V188.752Z"
              fillOpacity="0.05"
            />
            <path
              d="M263.625 347.002L203.623 363.078V425.031L263.625 408.856V347.002Z"
              fillOpacity="0.05"
            />
            <path
              d="M385.089 440.096L325.087 456.172V518.125L385.089 501.95V440.096Z"
              fillOpacity="0.05"
            />
            <path
              d="M627.756 123.527L567.754 139.603V201.557L627.756 185.382V123.527Z"
              fillOpacity="0.05"
            />
            <path
              d="M445.32 46.918L385.318 62.994V124.947L445.32 108.772V46.918Z"
              fillOpacity="0.05"
            />
            <path
              d="M749.192 279.59L689.19 295.666V357.619L749.192 341.444V279.59Z"
              fillOpacity="0.05"
            />
            <path
              d="M627.905 437.912L567.903 453.988V515.941L627.905 499.766V437.912Z"
              fillOpacity="0.05"
            />
            <path
              d="M202.491 175.656L142.489 191.732V253.685L202.491 237.511V175.656Z"
              fillOpacity="0.05"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M446.54 -79.1784L949.537 -213.956L949.278 -214.922L446.54 -80.2137V-87.9997H445.54V-79.9457L385.832 -63.947V-87.9997H384.832V-63.679L325.124 -47.6803V-87.9997H324.124V-47.4124L264.416 -31.4137V-87.9997H263.416V-31.1457L203.708 -15.147L203.708 -87.9997H202.708L202.708 -14.8791L143 1.11966L143 -87.9997H142L142 1.3876L-80.8521 61.1006L-80.5932 62.0666L142 2.42287V64.2363L-65.1402 119.739L-64.8814 120.705L142 65.2715L142 127.085L-49.4278 178.378L-49.1689 179.344L142 128.12V189.936L-33.7155 237.019L-33.4566 237.985L142 190.971V252.787L-18.0025 295.659L-17.7437 296.625L142 253.822V315.635L-2.29068 354.298L-2.03186 355.264L142 316.671V378.484L13.4218 412.937L13.6806 413.903L142 379.519V441.335L29.1341 471.577L29.3929 472.543L142 442.37V504.184L44.8466 530.216L45.1054 531.182L142 505.219V567.032L60.5591 588.855L60.8179 589.82L142 568.068V629.881L76.2715 647.493L76.5303 648.459L142 630.917V692.732L91.9838 706.134L92.2426 707.1L142 693.767V698.42H143V693.499L202.708 677.501V698.42H203.708V677.233L263.416 661.234V698.42H264.416V660.966L324.124 644.967V698.42H325.124V644.699L384.832 628.701V690.514L107.696 764.773L107.954 765.738L384.832 691.549V698.42H385.832V691.281L445.54 675.283V698.42H446.54V675.015L506.248 659.016V698.42H507.248V658.748L566.956 642.749V698.42H567.956V642.481L627.664 626.483V688.298L123.409 823.413L123.667 824.379L627.664 689.334V698.42H628.664V689.066L688.372 673.067V698.42H689.372V672.799L749.08 656.8V698.42H750.08V656.532L809.788 640.534V698.42H810.788V640.266L870.496 624.267V698.42H871.496V623.999L931.204 608V698.42H932.204V607.732L1153.8 548.357L1153.54 547.391L932.204 606.697V544.881L1138.08 489.716L1137.83 488.75L932.204 543.846V482.033L1122.37 431.077L1122.11 430.111L932.204 480.997V419.182L1106.66 372.437L1106.4 371.471L932.204 418.147V356.333L1090.95 313.798L1090.69 312.832L932.204 355.298V293.484L1075.24 255.159L1074.98 254.193L932.204 292.449V230.636L1059.52 196.521L1059.26 195.555L932.204 229.6V167.785L1043.81 137.88L1043.55 136.914L932.204 166.75V104.936L1028.1 79.2413L1027.84 78.2754L932.204 103.901V42.0874L1012.39 20.6027L1012.13 19.6367L932.204 41.0522V-20.7634L996.674 -38.0379L996.415 -39.0039L932.204 -21.7987L932.204 -83.6142L980.961 -96.6786L980.702 -97.6445L932.204 -84.6495V-87.9997H931.204V-84.3815L871.496 -68.3828V-87.9997H870.496V-68.1149L810.788 -52.1161V-87.9997H809.788V-51.8482L750.08 -35.8495V-87.9997H749.08V-35.5815L689.372 -19.5828L689.372 -81.3963L965.249 -155.317L964.99 -156.283L689.372 -82.4316V-87.9997H688.372V-82.1637L628.664 -66.1649V-87.9997H627.664V-65.897L567.956 -49.8983V-87.9997H566.956V-49.6303L507.248 -33.6316V-87.9997H506.248V-33.3637L446.54 -17.365L446.54 -79.1784ZM445.54 -78.9104L385.832 -62.9117L385.832 -1.09831L445.54 -17.097L445.54 -78.9104ZM384.832 -62.6438L325.124 -46.6451L325.124 15.1684L384.832 -0.830353L384.832 -62.6438ZM324.124 -46.3771L264.416 -30.3784L264.416 31.435L324.124 15.4363L324.124 -46.3771ZM263.416 -30.1104L203.708 -14.1117V47.7017L263.416 31.703L263.416 -30.1104ZM202.708 -13.8438L143 2.15492V63.9683L202.708 47.9696V-13.8438ZM628.664 -65.1297L688.372 -81.1284L688.372 -19.3149L628.664 -3.31616L628.664 -65.1297ZM567.956 -48.863L627.664 -64.8617L627.664 -3.04822L567.956 12.9505L567.956 -48.863ZM507.248 -32.5964L566.956 -48.5951L566.956 13.2184L507.248 29.2172L507.248 -32.5964ZM446.54 -16.3297L506.248 -32.3284L506.248 29.4851L446.54 45.4838V-16.3297ZM385.832 -0.0630493L445.54 -16.0618V45.7517L385.832 61.7505V-0.0630493ZM325.124 16.2036L384.832 0.20491V62.0184L325.124 78.0171V16.2036ZM264.416 32.4703L324.124 16.4716V78.2851L264.416 94.2838V32.4703ZM203.708 48.7369L263.416 32.7382V94.5517L203.708 110.55V48.7369ZM143 65.0036L202.708 49.0049V110.818L143 126.817L143 65.0036ZM931.204 -83.3463L871.496 -67.3475L871.496 -5.53207L931.204 -21.5308L931.204 -83.3463ZM870.496 -67.0796L810.788 -51.0809L810.788 10.7346L870.496 -5.26411L870.496 -67.0796ZM809.788 -50.8129L750.08 -34.8142L750.08 27.0013L809.788 11.0025L809.788 -50.8129ZM749.08 -34.5463L689.372 -18.5476V43.2679L749.08 27.2692L749.08 -34.5463ZM688.372 -18.2796L628.664 -2.2809V59.5346L688.372 43.5359V-18.2796ZM627.664 -2.01295L567.956 13.9858V75.8012L627.664 59.8025V-2.01295ZM566.956 14.2537L507.248 30.2524V92.0679L566.956 76.0692V14.2537ZM506.248 30.5204L446.54 46.5191V108.335L506.248 92.3358V30.5204ZM445.54 46.787L385.832 62.7857V124.601L445.54 108.603V46.787ZM384.832 63.0537L325.124 79.0524V140.868L384.832 124.869V63.0537ZM324.124 79.3203L264.416 95.319V157.135L324.124 141.136V79.3203ZM263.416 95.587L203.708 111.586V173.401L263.416 157.402V95.587ZM202.708 111.854L143 127.852V189.668L202.708 173.669V111.854ZM871.496 -4.49677L931.204 -20.4955V41.3201L871.496 57.3188V-4.49677ZM810.788 11.7699L870.496 -4.22882V57.5868L810.788 73.5855V11.7699ZM750.08 28.0365L809.788 12.0378V73.8534L750.08 89.8521V28.0365ZM689.372 44.3032L749.08 28.3045V90.1201L689.372 106.119V44.3032ZM628.664 60.5699L688.372 44.5711V106.387L628.664 122.385V60.5699ZM567.956 76.8365L627.664 60.8378V122.653L567.956 138.652V76.8365ZM507.248 93.1032L566.956 77.1045V138.92L507.248 154.919V93.1032ZM446.54 109.37L506.248 93.3711V155.187L446.54 171.185V109.37ZM385.832 125.636L445.54 109.638V171.453L385.832 187.452V125.636ZM325.124 141.903L384.832 125.904V187.72L325.124 203.719V141.903ZM264.416 158.17L324.124 142.171V203.987L264.416 219.985V158.17ZM203.708 174.436L263.416 158.438V220.253L203.708 236.252V174.436ZM143 190.703L202.708 174.704V236.52L143 252.519V190.703ZM143 253.554V315.367L202.708 299.369V237.555L143 253.554ZM203.708 237.287V299.101L263.416 283.102V221.289L203.708 237.287ZM264.416 221.021V282.834L324.124 266.835V205.022L264.416 221.021ZM325.124 204.754V266.567L384.832 250.569V188.755L325.124 204.754ZM385.832 188.487V250.301L445.54 234.302V172.489L385.832 188.487ZM446.54 172.221V234.034L506.248 218.035V156.222L446.54 172.221ZM507.248 155.954V217.767L566.956 201.769V139.955L507.248 155.954ZM567.956 139.687V201.501L627.664 185.502V123.689L567.956 139.687ZM628.664 123.421V185.234L688.372 169.235V107.422L628.664 123.421ZM689.372 107.154V168.967L749.08 152.969V91.1554L689.372 107.154ZM750.08 90.8874V152.701L809.788 136.702V74.8887L750.08 90.8874ZM810.788 74.6208V136.434L870.496 120.435V58.622L810.788 74.6208ZM871.496 58.3541V120.167L931.204 104.169V42.3554L871.496 58.3541ZM871.496 121.203L931.204 105.204V167.018L871.496 183.016V121.203ZM810.788 137.469L870.496 121.471V183.284L810.788 199.283V137.469ZM750.08 153.736L809.788 137.737V199.551L750.08 215.55V153.736ZM689.372 170.003L749.08 154.004V215.818L689.372 231.816V170.003ZM628.664 186.269L688.372 170.271V232.084L628.664 248.083V186.269ZM567.956 202.536L627.664 186.537V248.351L567.956 264.35V202.536ZM507.248 218.803L566.956 202.804V264.617L507.248 280.616V218.803ZM446.54 235.069L506.248 219.071V280.884L446.54 296.883V235.069ZM385.832 251.336L445.54 235.337V297.151L385.832 313.15V251.336ZM325.124 267.603L384.832 251.604V313.417L325.124 329.416V267.603ZM264.416 283.869L324.124 267.871V329.684L264.416 345.683V283.869ZM203.708 300.136L263.416 284.137V345.951L203.708 361.95V300.136ZM143 316.403L202.708 300.404V362.217L143 378.216V316.403ZM143 379.251V441.067L202.708 425.068V363.253L143 379.251ZM203.708 362.985V424.8L263.416 408.802V346.986L203.708 362.985ZM264.416 346.718V408.534L324.124 392.535V330.719L264.416 346.718ZM325.124 330.451V392.267L384.832 376.268V314.453L325.124 330.451ZM385.832 314.185V376L445.54 360.002V298.186L385.832 314.185ZM446.54 297.918V359.734L506.248 343.735V281.919L446.54 297.918ZM507.248 281.651V343.467L566.956 327.468V265.653L507.248 281.651ZM567.956 265.385V327.2L627.664 311.202V249.386L567.956 265.385ZM628.664 249.118V310.934L688.372 294.935V233.119L628.664 249.118ZM689.372 232.852V294.667L749.08 278.668V216.853L689.372 232.852ZM750.08 216.585V278.4L809.788 262.402V200.586L750.08 216.585ZM810.788 200.318V262.134L870.496 246.135V184.319L810.788 200.318ZM871.496 184.052V245.867L931.204 229.868V168.053L871.496 184.052ZM871.496 246.902L931.204 230.904V292.717L871.496 308.716V246.902ZM810.788 263.169L870.496 247.17V308.984L810.788 324.982V263.169ZM750.08 279.436L809.788 263.437V325.25L750.08 341.249V279.436ZM689.372 295.702L749.08 279.704V341.517L689.372 357.516V295.702ZM628.664 311.969L688.372 295.97V357.784L628.664 373.782V311.969ZM567.956 328.236L627.664 312.237V374.05L567.956 390.049V328.236ZM507.248 344.502L566.956 328.504V390.317L507.248 406.316V344.502ZM446.54 360.769L506.248 344.77V406.584L446.54 422.582V360.769ZM385.832 377.036L445.54 361.037V422.85L385.832 438.849V377.036ZM325.124 393.302L384.832 377.304V439.117L325.124 455.116V393.302ZM264.416 409.569L324.124 393.57V455.384L264.416 471.382V409.569ZM203.708 425.836L263.416 409.837V471.65L203.708 487.649V425.836ZM143 442.102L202.708 426.104V487.917L143 503.916V442.102ZM143 504.951V566.765L202.708 550.766V488.952L143 504.951ZM203.708 488.684V550.498L263.416 534.499V472.686L203.708 488.684ZM264.416 472.418V534.231L324.124 518.232V456.419L264.416 472.418ZM325.124 456.151V517.965L384.832 501.966V440.152L325.124 456.151ZM385.832 439.884V501.698L445.54 485.699V423.886L385.832 439.884ZM446.54 423.618V485.431L506.248 469.433V407.619L446.54 423.618ZM507.248 407.351V469.165L566.956 453.166V391.352L507.248 407.351ZM567.956 391.084V452.898L627.664 436.899V375.086L567.956 391.084ZM628.664 374.818V436.631L688.372 420.633V358.819L628.664 374.818ZM689.372 358.551V420.365L749.08 404.366V342.552L689.372 358.551ZM750.08 342.284V404.098L809.788 388.099V326.286L750.08 342.284ZM810.788 326.018V387.831L870.496 371.833V310.019L810.788 326.018ZM871.496 309.751V371.565L931.204 355.566V293.752L871.496 309.751ZM871.496 372.6L931.204 356.601V418.415L871.496 434.413V372.6ZM810.788 388.867L870.496 372.868V434.681L810.788 450.68V388.867ZM750.08 405.133L809.788 389.135V450.948L750.08 466.947V405.133ZM689.372 421.4L749.08 405.401V467.215L689.372 483.213V421.4ZM628.664 437.667L688.372 421.668V483.481L628.664 499.48V437.667ZM567.956 453.933L627.664 437.935V499.748L567.956 515.747V453.933ZM507.248 470.2L566.956 454.201V516.015L507.248 532.013V470.2ZM446.54 486.467L506.248 470.468V532.281L446.54 548.28V486.467ZM385.832 502.733L445.54 486.734V548.548L385.832 564.547V502.733ZM325.124 519L384.832 503.001V564.815L325.124 580.813V519ZM264.416 535.267L324.124 519.268V581.081L264.416 597.08V535.267ZM203.708 551.533L263.416 535.534V597.348L203.708 613.347V551.533ZM143 567.8L202.708 551.801V613.615L143 629.613V567.8ZM143 630.649V692.464L202.708 676.465V614.65L143 630.649ZM203.708 614.382V676.197L263.416 660.199V598.383L203.708 614.382ZM264.416 598.115V659.931L324.124 643.932V582.117L264.416 598.115ZM325.124 581.849V643.664L384.832 627.665V565.85L325.124 581.849ZM385.832 565.582V627.397L445.54 611.399V549.583L385.832 565.582ZM446.54 549.315V611.131L506.248 595.132V533.317L446.54 549.315ZM507.248 533.049V594.864L566.956 578.865V517.05L507.248 533.049ZM567.956 516.782V578.597L627.664 562.599V500.783L567.956 516.782ZM628.664 500.515V562.331L688.372 546.332V484.517L628.664 500.515ZM689.372 484.249V546.064L749.08 530.065V468.25L689.372 484.249ZM750.08 467.982V529.797L809.788 513.799V451.983L750.08 467.982ZM810.788 451.715V513.531L870.496 497.532V435.717L810.788 451.715ZM871.496 435.449V497.264L931.204 481.265V419.45L871.496 435.449ZM385.832 690.246V628.433L445.54 612.434V674.247L385.832 690.246ZM446.54 673.979V612.166L506.248 596.167V657.981L446.54 673.979ZM507.248 657.713V595.899L566.956 579.901V641.714L507.248 657.713ZM567.956 641.446V579.633L627.664 563.634V625.447L567.956 641.446ZM628.664 625.18V563.366L688.372 547.367V609.181L628.664 625.18ZM689.372 608.913V547.099L749.08 531.101V592.914L689.372 608.913ZM750.08 592.646V530.833L809.788 514.834V576.647L750.08 592.646ZM810.788 576.38V514.566L870.496 498.567V560.381L810.788 576.38ZM871.496 560.113V498.299L931.204 482.301V544.114L871.496 560.113ZM628.664 626.215V688.03L688.372 672.032V610.216L628.664 626.215ZM689.372 609.948V671.764L749.08 655.765V593.949L689.372 609.948ZM750.08 593.681V655.497L809.788 639.498V577.683L750.08 593.681ZM810.788 577.415V639.23L870.496 623.232V561.416L810.788 577.415ZM871.496 561.148V622.964L931.204 606.965V545.149L871.496 561.148Z"
              fillOpacity="0.1"
            />
          </g>
          <defs>
            <radialGradient
              id="radial-dark"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(468.373 287.536) rotate(90) scale(430.464 467.627)"
            >
              <stop stopColor="#D9D9D9" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </span>
      {children}
    </DocsLayout>
  );
}

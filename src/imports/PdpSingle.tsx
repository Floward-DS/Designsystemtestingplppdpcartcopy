import svgPaths from "./svg-2g3q6kanz9";
import clsx from "clsx";
import imgImage from "figma:asset/2503cb841c0c505f871a03cb7c55aa7409241efe.png";
import imgImage1 from "figma:asset/598c87302583f18dc4913e428985aae32b0ac423.png";
import imgRectangle813377 from "figma:asset/1a55111ced794a70d2b9edbf3590a4a5fcfb795d.png";
import imgScreenshot20231220At4101 from "figma:asset/d6bbd8608c64d5a686cc6e467252a9ec88aecdbe.png";
import imgScreenshot20231220At4102 from "figma:asset/25ca6ffcf44f882e775d571050afda5eb4a13e2e.png";
import imgScreenshot20231220At4103 from "figma:asset/c970386e6404b147970a4301966a795f254777a9.png";
import imgRectangle813378 from "figma:asset/3fd406361a3ebfb7c86dd31b6ff9178c9596656d.png";
import imgRectangle813379 from "figma:asset/5aafdd662d9208fe7c80a52921ca6b90172d9c30.png";
import imgScreenshot20230712At10491 from "figma:asset/50b4f73ed7085b86bc63bc984a5c0ff76bb80775.png";
import imgScreenshot20230703At5221 from "figma:asset/c0a5a7b3b6255937a4abf27e3aa3b8288f4076ec.png";
import img1280PxMadaLogo1 from "figma:asset/3ece0687e503b99cf8c16c9765b5d41af8da2e6e.png";

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[24.585px] relative shrink-0 w-[36px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 25">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[187px] left-0 top-0 w-[139px]">
      <div className="absolute left-0 rounded-[4px] size-[139px] top-0">{children}</div>
      <Text text="The Royal Letterbox Floral Vase" />
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("h-0 relative", additionalClassNames)}>
      <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(230, 229, 224, 1)" } as React.CSSProperties}>
        {children}
      </div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("absolute size-[36px] top-[62.63px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("absolute content-stretch flex items-start left-0 top-[151px] w-[139px]", additionalClassNames)}>
      <p className="font-['Founders_Grotesk:Regular',sans-serif] h-[36px] leading-[normal] not-italic relative shrink-0 text-[#353b41] text-[14px] w-[139px]">{children}</p>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("size-[24px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Plus({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper additionalClassNames="absolute left-[144px] top-[58px]">
      <g id="Plus 4 1">{children}</g>
    </Wrapper>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center left-0 text-[0px] top-[24px] translate-y-[-50%]">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] not-italic text-[12px] text-nowrap underline">{text}</p>
    </div>
  );
}
type SecondaryButtonTextProps = {
  text: string;
};

function SecondaryButtonText({ text }: SecondaryButtonTextProps) {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center left-0 px-[24px] py-[14px] rounded-[48px] top-[203px] w-[312px]">
      <div aria-hidden="true" className="absolute border border-[#074e59] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="flex flex-col font-['Founders_Grotesk:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#074e59] text-[16px] text-center text-nowrap tracking-[0.08px]">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

function Helper() {
  return <Wrapper1 additionalClassNames="h-[36px]">{`Cutter & Squire Chocolate Brownies`}</Wrapper1>;
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return <Wrapper1>{text}</Wrapper1>;
}

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute h-[537.911px] left-[-55px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[55px_3.984px] mask-size-[430px_515px] top-[-3.98px] w-[541px]" data-name="image" style={{ maskImage: `url('${imgImage}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.19%] left-0 max-w-none top-[0.65%] w-full" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-0 left-0 top-0 w-[106px]">
      <div className="absolute inset-[-1.25px_-2.12%_-3.25px_-1.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 5">
          <g id="Group 73751">
            <path d="M1.25 1.25L16.25 1.25" id="Line 7" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeWidth="2.5" />
            <g filter="url(#filter0_d_2001_904)" id="Line 9">
              <path d="M24.25 1.25L39.25 1.25" stroke="var(--stroke-0, #F7F6F2)" strokeLinecap="round" strokeWidth="2.5" />
            </g>
            <g filter="url(#filter1_d_2001_904)" id="Line 10">
              <path d="M69.25 1.25L84.25 1.25" stroke="var(--stroke-0, #F7F6F2)" strokeLinecap="round" strokeWidth="2.5" />
            </g>
            <g filter="url(#filter2_d_2001_904)" id="Line 8">
              <path d="M47.25 1.25H62.25" stroke="var(--stroke-0, #F7F6F2)" strokeLinecap="round" strokeWidth="2.5" />
            </g>
            <g filter="url(#filter3_d_2001_904)" id="Line 11">
              <path d="M92.25 1.25H107.25" stroke="var(--stroke-0, #F7F6F2)" strokeLinecap="round" strokeWidth="2.5" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.5" id="filter0_d_2001_904" width="19.5" x="22" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2001_904" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2001_904" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.5" id="filter1_d_2001_904" width="19.5" x="67" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2001_904" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2001_904" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.5" id="filter2_d_2001_904" width="19.5" x="45" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2001_904" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2001_904" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.5" id="filter3_d_2001_904" width="19.5" x="90" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2001_904" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2001_904" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute bottom-[20px] h-0 left-1/2 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.13)] translate-x-[-50%] w-[106px]">
      <Group5 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute h-[515px] left-0 top-0 w-[430px]">
      <MaskGroup />
      <Frame33 />
    </div>
  );
}

function Upload() {
  return (
    <div className="relative size-full" data-name="Upload">
      <div className="absolute inset-[-5.9%_-5.73%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <g id="Upload">
            <path d={svgPaths.p11c61600} id="Stroke-1" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M18.4507 9.47904H7.41309" id="Stroke-3" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2c4d2700} id="Stroke-5" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightUpload() {
  return (
    <div className="absolute contents inset-[9.13%_11.37%_11.55%_11.55%]" data-name="Iconly/Light/Upload">
      <div className="absolute flex inset-[9.13%_11.37%_11.55%_11.55%] items-center justify-center">
        <div className="flex-none h-[16.958px] rotate-[270deg] w-[17.451px]">
          <Upload />
        </div>
      </div>
    </div>
  );
}

function Upload1() {
  return (
    <div className="absolute left-[7px] overflow-clip size-[22px] top-[7.37px]" data-name="Upload">
      <IconlyLightUpload />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute left-[374px] size-[36px] top-[62.63px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <circle cx="18" cy="18" fill="var(--fill-0, white)" id="Ellipse 30" r="18" />
      </svg>
      <Upload1 />
    </div>
  );
}

function Frame26() {
  return (
    <Wrapper2 additionalClassNames="left-[318px]">
      <g id="Frame 2608494">
        <circle cx="18" cy="18" fill="var(--fill-0, white)" id="Ellipse 29" r="18" />
        <g id="heart like 1">
          <path clipRule="evenodd" d={svgPaths.p1834b300} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </g>
    </Wrapper2>
  );
}

function Frame36() {
  return (
    <Wrapper2 additionalClassNames="left-[20px]">
      <g id="Frame 2608609">
        <circle cx="18" cy="18" fill="var(--fill-0, white)" id="Ellipse 29" r="18" />
        <g id="Frame 2609670">
          <path d={svgPaths.p21ddbc00} id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </g>
    </Wrapper2>
  );
}

function Frame35() {
  return (
    <div className="h-[22px] leading-[20px] not-italic relative shrink-0 text-[#074e59] text-nowrap w-[90px]">
      <p className="absolute font-['Founders_Grotesk:Medium',sans-serif] left-[38px] text-[32px] top-0">345</p>
      <p className="absolute font-['Founders_Grotesk:Regular',sans-serif] left-0 text-[18px] top-[2px]">AED</p>
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[31px] mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] font-['Gilroy:Semibold',sans-serif] leading-[normal] ml-0 mt-0 not-italic relative text-[#074e59] text-[0px] text-nowrap">
        <p className="font-['Founders_Grotesk:Medium',sans-serif] mb-0 text-[16px] tracking-[0.08px]">Earn 450</p>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Founders_Grotesk:Regular',sans-serif] text-[12px] underline">Floward points</p>
      </div>
    </div>
  );
}

function Leaves() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[26px]" data-name="Leaves 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Leaves 1">
          <path d={svgPaths.p1228a380} id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2f8d3cc0} id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10.0323 17.6344H19.1176" id="Vector_3" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
      <Leaves />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Group2 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_189px] items-start relative shrink-0 w-[380px]">
      <Frame35 />
      <Frame17 />
      <p className="font-['Founders_Grotesk:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8baaad] text-[12px] text-nowrap">{`All prices inc. Tax & Duties`}</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-start left-[18px] top-[547px] w-[390px]">
      <Frame41 />
      <Wrapper3 additionalClassNames="shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
          <line id="Line 4" stroke="var(--stroke-0, #E6E5E0)" x2="390" y1="0.5" y2="0.5" />
        </svg>
      </Wrapper3>
      <p className="font-['Montas:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#074e59] text-[28px] w-[min-content]">The Royal Letterbox Vase</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[39px] leading-[0] left-[54px] not-italic text-nowrap top-[13px] w-[196px]">
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center left-0 text-[#074e59] text-[16px] top-[9.5px] tracking-[-0.16px] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap">No Address Hassle</p>
      </div>
      <div className="absolute flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center left-0 text-[#505862] text-[14px] top-[31.5px] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap">We’ll get the recipient address for you</p>
      </div>
    </div>
  );
}

function PinLike() {
  return (
    <div className="absolute left-[12px] size-[33px] top-[15px]" data-name="Pin Like 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="Pin Like 3">
          <path d={svgPaths.p65a3d80} id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path clipRule="evenodd" d={svgPaths.p31618d00} fillRule="evenodd" id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[2px] rounded-[4px] top-[5px] w-[277px]">
      <Frame8 />
      <PinLike />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute h-[74px] left-0 top-0 w-[303px]">
      <div className="absolute bg-white h-[74px] left-0 rounded-[12px] top-0 w-[302px]" />
      <Frame15 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[39px] leading-[0] left-[38px] not-italic text-nowrap top-0 w-[196px]">
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center left-0 text-[#074e59] text-[16px] top-[8.5px] tracking-[-0.16px] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap">Premium Flowers</p>
      </div>
      <div className="absolute flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center left-0 text-[#505862] text-[14px] top-[29.5px] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap">Sustainably sourced</p>
      </div>
    </div>
  );
}

function Flower() {
  return (
    <div className="absolute left-0 size-[32px] top-[2px]" data-name="Flower 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Flower 1">
          <path clipRule="evenodd" d={svgPaths.p17c7a800} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1f9deb80} id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute h-[39px] left-[12px] top-[19.5px] w-[240px]">
      <Frame9 />
      <Flower />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute h-[74px] left-[315px] top-0 w-[319px]">
      <div className="absolute bg-white h-[74px] left-0 rounded-[12px] top-0 w-[319px]" />
      <Frame25 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[74px] overflow-clip relative shrink-0 w-full">
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute left-[3px] size-[28px] top-[34px]">
      <div className="absolute inset-[-2.14%_-2.14%_-1.79%_-1.79%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <g id="Frame 2608559">
            <g id="Frame 2608557">
              <path d={svgPaths.p3859e547} id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p1e83f780} id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 1.6V17.6" id="Vector_3" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <g id="Frame 2608558">
              <path d={svgPaths.p2e3d7d00} id="Vector_4" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.pa93c320} id="Vector_5" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.5 26.1L27.5 26.1" id="Vector_6" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <path d={svgPaths.pbf46000} fill="var(--fill-0, #E6FFFA)" id="Vector_7" stroke="var(--stroke-0, #074E59)" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute h-[74px] left-[22px] top-[324px] w-[180px]">
      <p className="absolute font-['Founders_Grotesk:Medium',sans-serif] leading-[normal] left-0 not-italic text-[#074e59] text-[14px] top-0 w-[180px]">Dimensions</p>
      <Frame29 />
      <ul className="absolute block font-['Founders_Grotesk:Regular',sans-serif] leading-[0] left-[34px] not-italic text-[#074e59] text-[0px] text-nowrap top-[26px]">
        <li className="leading-[normal] mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px]">
          <span>{`Height: `}</span>
          <span className="font-['Founders_Grotesk:Medium',sans-serif] not-italic">45cm</span>
        </li>
        <li className="leading-[normal] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px]">
          <span>{`Width: `}</span>
          <span className="font-['Founders_Grotesk:Medium',sans-serif] not-italic text-[#074e59]">20cm</span>
        </li>
      </ul>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[21px] top-[26px]">
      <p className="absolute font-['Founders_Grotesk:Medium',sans-serif] leading-[24px] left-[59px] not-italic text-[#074e59] text-[16px] text-nowrap top-[26px]">{`Description `}</p>
      <p className="absolute font-['Founders_Grotesk:Medium',sans-serif] leading-[24px] left-[274px] not-italic text-[#8baaad] text-[16px] text-nowrap top-[27px]">Care</p>
      <p className="absolute font-['Founders_Grotesk:Regular',sans-serif] leading-[20px] left-[21px] not-italic text-[#074e59] text-[14px] top-[80px] w-[340px]">{`A bouquet of 25 breathtaking red roses, elegantly hand-tied and wrapped in chic black paper. The bouquet exudes a sense of sophistication and class, making it perfect for any romantic occasion. The roses' deep red symbolizes love and passion, and the black wrapping adds a touch of mystery and elegance.`}</p>
      <div className="absolute font-['Founders_Grotesk:Regular',sans-serif] leading-[0] left-[22px] not-italic text-[#074e59] text-[14px] top-[208px] w-[192px]">
        <p className="leading-[22px] mb-0">
          <span className="font-['Founders_Grotesk:Medium',sans-serif] not-italic text-[#074e59]">Bouquet Includes</span>:
        </p>
        <ul className="list-disc">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[22px]">Red Roses : 25</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[22px]">Wrapping: Black Paper</span>
          </li>
        </ul>
      </div>
      <div className="absolute h-0 left-[21px] top-[61.5px] w-[350px]">
        <div className="absolute inset-[-0.5px_-0.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 351 1">
            <path d="M0.5 0.5H350.5" id="Line 4" stroke="var(--stroke-0, #092531)" strokeLinecap="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[21px] top-[61px] w-[175px]">
        <div className="absolute inset-[-1px_-0.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 177 2">
            <path d="M1 1H176" id="Line 5" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextLink() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0" data-name="text link">
      <div className="flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#074e59] text-[0px] text-center text-nowrap">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] text-[14px] underline">See More</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="relative size-[13px]" data-name="Left 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Left 3">
          <path clipRule="evenodd" d={svgPaths.p9c4bcf0} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute h-[20px] left-[22px] top-[286px] w-[79px]">
      <TextLink />
      <div className="absolute flex items-center justify-center left-[59px] size-[13px] top-[4px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Left />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-[412px] relative shrink-0 w-[390px]">
      <div className="absolute backdrop-blur-[9.5px] backdrop-filter bg-white h-[412px] left-0 rounded-[12px] top-0 w-[390px]" />
      <Frame28 />
      <Group1 />
      <Frame30 />
    </div>
  );
}

function Frame1() {
  return (
    <Wrapper4>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute h-[123.56%] left-[-31.65%] max-w-none top-[-8.9%] w-[164.75%]" src={imgRectangle813377} />
      </div>
    </Wrapper4>
  );
}

function Frame() {
  return (
    <div className="h-[201px] relative rounded-[12px] shrink-0 w-[139px]">
      <Frame1 />
    </div>
  );
}

function ProductCard() {
  return (
    <div className="absolute content-stretch flex flex-col h-[187px] items-start left-0 top-0 w-[139px]" data-name="Product_Card">
      <Frame />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute h-[141px] left-[-28px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[28px_-30px] mask-size-[139px_139px] top-[30px] w-[195px]" data-name="Screenshot 2023-12-20 at 4.10 1" style={{ maskImage: `url('${imgScreenshot20231220At4101}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20231220At4102} />
      </div>
      <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[139px_139px] size-[139px] top-0" data-name="Screenshot 2023-12-20 at 4.10 2" style={{ maskImage: `url('${imgScreenshot20231220At4101}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[108.63%] left-[-22.03%] max-w-none top-0 w-[144.07%]" src={imgScreenshot20231220At4103} />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[199px] left-0 top-0 w-[139px]">
      <MaskGroup1 />
      <Helper />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[187px] relative rounded-[12px] shrink-0 w-[139px]">
      <Frame2 />
    </div>
  );
}

function ProductCard1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[187px] items-start left-[173px] top-0 w-[139px]" data-name="Product_Card">
      <Frame3 />
    </div>
  );
}

function Plus1() {
  return (
    <Plus>
      <path d="M6 12H18" id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 6V18" id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Plus>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[255px] left-[12px] top-[12px] w-[312px]">
      <SecondaryButtonText text="Add Both To Cart For AED 630" />
      <ProductCard />
      <ProductCard1 />
      <Plus1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[279px] relative shrink-0 w-[336px]">
      <Frame10 />
    </div>
  );
}

function Frame4() {
  return (
    <Wrapper4>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle813378} />
    </Wrapper4>
  );
}

function Frame5() {
  return (
    <div className="h-[201px] relative rounded-[12px] shrink-0 w-[139px]">
      <Frame4 />
    </div>
  );
}

function ProductCard2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[187px] items-start left-0 top-0 w-[139px]" data-name="Product_Card">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[199px] left-0 top-0 w-[139px]">
      <div className="absolute left-0 rounded-[4px] size-[139px] top-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle813379} />
      </div>
      <Helper />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[187px] relative rounded-[12px] shrink-0 w-[139px]">
      <Frame6 />
    </div>
  );
}

function ProductCard3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[187px] items-start left-[173px] top-0 w-[139px]" data-name="Product_Card">
      <Frame7 />
    </div>
  );
}

function Plus2() {
  return (
    <Plus>
      <path d="M6 12H18" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 6V18" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Plus>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[255px] left-[12px] top-[12px] w-[312px]">
      <SecondaryButtonText text="Add Both To Cart For AED 630" />
      <ProductCard2 />
      <ProductCard3 />
      <Plus2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[279px] relative shrink-0 w-[336px]">
      <div className="absolute bg-white h-[279px] left-0 rounded-[8px] top-0 w-[336px]" />
      <Frame14 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[267px] items-center left-[9px] overflow-x-auto overflow-y-clip top-[50px] w-[383px]">
      <Frame11 />
      <div className="flex h-[249px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Wrapper3 additionalClassNames="w-[249px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 249 1">
              <line id="Line 17" stroke="var(--stroke-0, #E6E5E0)" x2="249" y1="0.5" y2="0.5" />
            </svg>
          </Wrapper3>
        </div>
      </div>
      <Frame12 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="h-[323px] relative shrink-0 w-[392px]">
      <div className="absolute backdrop-blur-[9.5px] backdrop-filter bg-white h-[323px] left-0 rounded-[12px] top-0 w-[392px]" />
      <p className="absolute font-['Founders_Grotesk:Medium',sans-serif] h-[28px] leading-[1.2] left-[20px] not-italic text-[#074e59] text-[18px] top-[20px] tracking-[-0.36px] w-[281px]">Frequently bought together</p>
      <Frame13 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute h-[31px] leading-[0] left-0 not-italic text-[#074e59] text-nowrap top-[2px] w-[239px]">
      <div className="absolute flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center left-0 text-[12px] top-[4px] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap">Split your bill into 4 payments. interest-free!</p>
      </div>
      <Text1 text="Learn more" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute h-[33px] left-0 top-0 w-[358px]">
      <Frame21 />
      <div className="absolute h-[19px] left-[306px] top-0 w-[52px]" data-name="Screenshot 2023-07-12 at 10.49 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20230712At10491} />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute h-[32px] leading-[0] left-0 not-italic text-[#074e59] text-nowrap top-0 w-[224px]">
      <Text1 text="Learn more" />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center left-0 text-[12px] top-[4px] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap">or 4 interest-free payments of SAR 369.75</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute h-[32px] left-0 top-[63px] w-[358px]">
      <Frame22 />
      <div className="absolute h-[21px] left-[308px] top-px w-[50px]" data-name="Screenshot 2023-07-03 at 5.22 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20230703At5221} />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="[grid-area:1_/_1] h-[95px] ml-[16px] mt-[71px] relative w-[358px]">
      <Frame23 />
      <Frame24 />
      <div className="absolute h-0 left-0 top-[48px] w-[358px]">
        <div className="absolute inset-[-0.5px_0_0_0]" style={{ "--stroke-0": "rgba(230, 229, 224, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 1">
            <line id="Line 10" stroke="var(--stroke-0, #E6E5E0)" strokeWidth="0.5" x2="358" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] border border-[#e6e5e0] border-solid h-[180.881px] ml-0 mt-0 rounded-[8px] w-[390px]" />
      <div className="[grid-area:1_/_1] bg-white border border-[#e6e5e0] border-solid h-[131px] ml-0 mt-[53px] rounded-bl-[8px] rounded-br-[8px] w-[390px]" />
      <Frame16 />
    </div>
  );
}

function PaymentMethodApplePay() {
  return (
    <Wrapper5>
      <g id="Payment Method/ApplePay">
        <rect fill="var(--fill-0, white)" height="23.5854" id="BASE" rx="3.5" stroke="var(--stroke-0, #E6E5E0)" width="35" x="0.5" y="0.5" />
        <path clipRule="evenodd" d={svgPaths.pf511200} fill="var(--fill-0, black)" fillRule="evenodd" id="ApplePay" />
      </g>
    </Wrapper5>
  );
}

function Mastercard() {
  return (
    <div className="absolute inset-[20.84%_17.14%_21.64%_18.57%]" data-name="Mastercard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 15">
        <g id="Mastercard">
          <path d={svgPaths.p2627400} fill="var(--fill-0, #ED0006)" id="Left" />
          <path d={svgPaths.p3962e980} fill="var(--fill-0, #F9A000)" id="Right" />
          <path d={svgPaths.p2f2f00} fill="var(--fill-0, #FF5E00)" id="Middle" />
        </g>
      </svg>
    </div>
  );
}

function PaymentMethodMastercard() {
  return (
    <div className="h-[24.667px] relative shrink-0 w-[37px]" data-name="Payment Method/Mastercard">
      <div className="absolute bg-white border border-[#e6e5e0] border-solid inset-0 rounded-[4px]" data-name="BASE" />
      <Mastercard />
    </div>
  );
}

function PaymentMethodGooglePay() {
  return (
    <div className="h-[24.667px] relative shrink-0 w-[37px]" data-name="Payment Method/GooglePay">
      <div className="absolute bg-white border border-[#e6e5e0] border-solid inset-0 rounded-[4px]" data-name="BASE" />
      <div className="absolute inset-[28.38%_10.81%_31.08%_8.11%]" data-name="1280px-Mada_Logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1280PxMadaLogo1} />
      </div>
    </div>
  );
}

function PayPal() {
  return (
    <div className="absolute inset-[13.14%_21.43%_14.29%_21.43%]" data-name="PayPal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
        <g id="PayPal">
          <path clipRule="evenodd" d={svgPaths.pbb42480} fill="var(--fill-0, #253B80)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pb98d480} fill="var(--fill-0, #179BD7)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p12230000} fill="var(--fill-0, #253B80)" id="Vector_3" />
          <path d={svgPaths.p45ea640} fill="var(--fill-0, #179BD7)" id="Vector_4" />
          <path d={svgPaths.p382fb580} fill="var(--fill-0, #222D65)" id="Vector_5" />
          <path d={svgPaths.p2e8c9700} fill="var(--fill-0, #253B80)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function PaymentMethodPayPal() {
  return (
    <div className="h-[24.667px] relative shrink-0 w-[37px]" data-name="Payment Method/PayPal">
      <div className="absolute bg-white border border-[#e6e5e0] border-solid inset-0 rounded-[4px]" data-name="BASE" />
      <PayPal />
    </div>
  );
}

function PaymentMethodVisa() {
  return (
    <Wrapper5>
      <g id="Payment Method/Visa">
        <rect fill="var(--fill-0, white)" height="23.5854" id="BASE" rx="3.5" stroke="var(--stroke-0, #E6E5E0)" width="35" x="0.5" y="0.5" />
        <path clipRule="evenodd" d={svgPaths.p91a5b80} fill="var(--fill-0, #172B85)" fillRule="evenodd" id="visa-logo" />
      </g>
    </Wrapper5>
  );
}

function Pay() {
  return (
    <div className="absolute inset-[34.58%_14.29%_25.01%_44.53%]" data-name="Pay">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
        <g id="Pay">
          <path d={svgPaths.p3bb66380} fill="var(--fill-0, #3C4043)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function G() {
  return (
    <div className="absolute inset-[32.1%_62.08%_32.21%_14.28%]" data-name="G">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="G">
          <path d={svgPaths.p1c82370} fill="var(--fill-0, #4285F4)" id="Blue" />
          <path d={svgPaths.p36c0dc00} fill="var(--fill-0, #34A853)" id="Green" />
          <path d={svgPaths.p26c15700} fill="var(--fill-0, #FBBC04)" id="Yellow" />
          <path d={svgPaths.p3ba226f0} fill="var(--fill-0, #EA4335)" id="Red" />
        </g>
      </svg>
    </div>
  );
}

function GooglePay() {
  return (
    <div className="absolute contents inset-[32.1%_14.29%_25.01%_14.28%]" data-name="GooglePay">
      <Pay />
      <G />
    </div>
  );
}

function PaymentMethodGooglePay1() {
  return (
    <div className="h-[24.667px] relative shrink-0 w-[37px]" data-name="Payment Method/GooglePay">
      <div className="absolute bg-white border border-[#e6e5e0] border-solid inset-0 rounded-[4px]" data-name="BASE" />
      <GooglePay />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[114px] top-[16px]">
      <PaymentMethodApplePay />
      <PaymentMethodMastercard />
      <PaymentMethodGooglePay />
      <PaymentMethodPayPal />
      <PaymentMethodVisa />
      <PaymentMethodGooglePay1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[114px] top-[16px]">
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0">
      <Group3 />
      <Group4 />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] h-[15px] justify-center leading-[0] left-[16px] not-italic text-[#074e59] text-[14px] top-[28.5px] translate-y-[-50%] w-[102px]">
        <p className="leading-[normal]">Ways to pay</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[20px] top-[672px] w-[410px]">
      <Frame34 />
      <Frame38 />
      <Frame40 />
      <Frame19 />
    </div>
  );
}

function TimeIPhone() {
  return (
    <div className="h-[21px] relative shrink-0 w-[54px]" data-name="🧰/Time (iPhone)">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] left-[27px] not-italic text-[17px] text-black text-center top-[calc(50%-10.5px)] tracking-[-0.408px] translate-x-[-50%] w-[54px]">9:41</p>
    </div>
  );
}

function CellularWifiBatteryIPhone() {
  return (
    <div className="h-[13px] relative shrink-0 w-[78.261px]" data-name="🧰/Cellular,Wifi,Battery (iPhone)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 13">
        <g id="ð§°/Cellular,Wifi,Battery (iPhone)">
          <g id="Battery">
            <rect height="12" id="Border" opacity="0.35" rx="3" stroke="var(--stroke-0, black)" width="24" x="51.4333" y="0.5" />
            <path d={svgPaths.p25b67360} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="1.33333" width="21" x="52.9333" y="2" />
          </g>
          <path d={svgPaths.p2eadca80} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p31669080} fill="var(--fill-0, black)" id="Cellular Connection" />
        </g>
      </svg>
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pb-[14px] pl-[27px] pr-[26px] pt-[18px] top-0 w-[428px]" data-name="Status Bar (iPhone)">
      <TimeIPhone />
      <CellularWifiBatteryIPhone />
    </div>
  );
}

function Cta() {
  return (
    <div className="absolute h-[115px] left-0 top-0 w-[430px]" data-name="CTA">
      <div className="absolute bg-white inset-0 shadow-[0px_-1px_2px_0px_rgba(0,0,0,0.08)]" />
      <div className="absolute bg-black inset-[81.25%_34.42%_13.54%_34.42%] rounded-[100px]" data-name="Home Indicator" />
    </div>
  );
}

function ShoppingCartPlus() {
  return (
    <Wrapper additionalClassNames="relative shrink-0">
      <g id="Shopping Cart plus 2">
        <path d={svgPaths.pcc3a480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M13.0568 9.97656V13.1173" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.6271 11.549H11.4863" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.pfad2100} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p15bcd880} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper>
  );
}

function SecondaryButton() {
  return (
    <div className="absolute bg-[#074e59] bottom-[42px] content-stretch flex gap-[8px] h-[60px] items-center justify-center left-1/2 px-[24px] py-[14px] rounded-[58px] translate-x-[-50%] w-[390px]" data-name="Secondary button">
      <ShoppingCartPlus />
      <div className="flex flex-col font-['Founders_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[0.08px]">
        <p className="leading-[normal]">Add To Cart</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute backdrop-blur-[5px] backdrop-filter bg-[rgba(247,246,242,0.9)] bottom-0 h-[115px] left-0 shadow-[0px_-64px_18px_0px_rgba(0,0,0,0),0px_-41px_16px_0px_rgba(0,0,0,0.01),0px_-23px_14px_0px_rgba(0,0,0,0.02),0px_-10px_10px_0px_rgba(0,0,0,0.03),0px_-3px_6px_0px_rgba(0,0,0,0.04)] w-[430px]">
      <Cta />
      <SecondaryButton />
    </div>
  );
}

export default function PdpSingle() {
  return (
    <div className="bg-[#f7f6f2] relative size-full" data-name="PDP Single">
      <Frame20 />
      <Frame37 />
      <Frame27 />
      <Frame26 />
      <Frame36 />
      <Frame42 />
      <Frame39 />
      <StatusBarIPhone />
    </div>
  );
}
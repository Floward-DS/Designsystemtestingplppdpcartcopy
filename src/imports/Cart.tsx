import svgPaths from "./svg-f8ulvrh8na";
import clsx from "clsx";
import imgExpressDelivery1 from "figma:asset/25fa27b9b6ae9ba0531610a8efd7e0dd1f29b247.png";
import imgRectangle813693 from "figma:asset/d0943035492f97cff08212c0fe084fd3459df606.png";
import imgRectangle813694 from "figma:asset/7e12a52c84533bad063cf870cf404346737204f1.png";
import imgRectangle813381 from "figma:asset/afaf807ea76641048d3cea332c5476b8c9432a4b.png";
import imgImage from "figma:asset/6121d911b7338d66238ca5de1d2f3f5034af15a4.png";
import imgImage1 from "figma:asset/cf2c24ea3fa0ec87c51a7cfb8b02edd4d2f7f22e.png";
import imgImage2 from "figma:asset/dbe7b22d2c2899a7dee5ac516e51a42202aee01e.png";
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        {children}
      </svg>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return <Wrapper5 additionalClassNames={clsx("absolute size-[30px]", additionalClassNames)}>{children}</Wrapper5>;
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center justify-center ml-0 mt-0 p-[4px] relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#f7f6f2] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="relative rounded-[7.33px] shrink-0 size-[103px]" data-name="image">
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
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
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
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
        {children}
      </svg>
    </div>
  );
}
type Delete2Props = {
  additionalClassNames?: string;
};

function Delete2({ children, additionalClassNames = "" }: React.PropsWithChildren<Delete2Props>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Delete">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[24px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}
type TabBarItemActiveTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TabBarItemActiveText({ text, additionalClassNames = "" }: TabBarItemActiveTextProps) {
  return (
    <div className={clsx("bg-[rgba(247,246,242,0)] content-stretch flex flex-col h-[67px] items-center justify-end px-[25px] py-[14px] relative shrink-0", additionalClassNames)}>
      <div className="capitalize flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#074e59] text-[12px] text-center text-nowrap">
        <p className="leading-[14px]">{text}</p>
      </div>
    </div>
  );
}
type Helper2Props = {
  additionalClassNames?: string;
};

function Helper2({ additionalClassNames = "" }: Helper2Props) {
  return (
    <div className={clsx("absolute h-0 left-1/2 translate-x-[-50%] w-[348px]", additionalClassNames)}>
      <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(230, 229, 224, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
          <line id="Line 26" stroke="var(--stroke-0, #E6E5E0)" x2="348" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type TabItemTextProps = {
  text: string;
};

function TabItemText({ text }: TabItemTextProps) {
  return (
    <div className="h-[34px] relative rounded-[68px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Founders_Grotesk:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#074e59] text-[16px] text-nowrap tracking-[-0.16px]">
            <p className="leading-[1.2]">{text}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#074e59] border-solid inset-0 pointer-events-none rounded-[68px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_1px_4px_0px_rgba(16,24,40,0.02)]" />
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[87px]">
      <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[12px] text-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
      <div className="flex flex-col font-['Founders_Grotesk:Medium',sans-serif] h-[11px] justify-center relative shrink-0 text-[16px] w-[61px]">
        <p className="leading-[normal]">{text1}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <Wrapper>
      <p className="capitalize font-['Founders_Grotesk:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7c83] text-[16px] text-nowrap">{text}</p>
    </Wrapper>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <Wrapper>
      <p className="capitalize font-['Founders_Grotesk:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8baaad] text-[16px] text-nowrap">{text}</p>
    </Wrapper>
  );
}

function Helper() {
  return (
    <div className="absolute left-1/2 size-[8px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute inset-[-7.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Frame 2609683">
            <path d="M4.59988 0.6V8.6" id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            <path d="M0.6 4.59988H8.6" id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RightArrow() {
  return (
    <div className="absolute inset-[36.67%_30.13%_32.83%_30%]" data-name="Right Arrow">
      <Wrapper1 additionalClassNames="inset-[-1.37%_-1.05%]">
        <g id="Right Arrow">
          <path d={svgPaths.p36099300} id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M0.5 3.756H9.268" id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </Wrapper1>
    </div>
  );
}

function RightArrow1() {
  return (
    <div className="absolute left-[467px] size-[24px] top-[184px]" data-name="Right Arrow">
      <div className="absolute bg-white inset-0 rounded-[50px]" data-name="Platter" />
      <RightArrow />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute h-[3px] left-0 top-[30px] w-[236px]">
      <div className="absolute bg-[#f7f6f2] h-[3px] left-0 rounded-[40px] top-0 w-[215px]" />
      <div className="absolute bg-[#eeedea] h-[3px] left-0 rounded-[40px] top-0 w-[223px]" />
      <div className="absolute bg-[#84c502] h-[3px] left-0 rounded-[40px] top-0 w-[161px]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute h-[33px] left-[87px] top-[19px] w-[236px]">
      <Frame27 />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[#074e59] text-[0px] text-nowrap top-[8.5px] translate-y-[-50%]">
        <p className="leading-[normal] text-[14px]">
          <span>{`Only `}</span>
          <span className="font-['Founders_Grotesk:Medium',sans-serif] not-italic">AED 110</span>
          <span>{` left to unlock Free Delivery`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="h-[68px] relative shrink-0 w-full">
      <div className="absolute backdrop-blur-[9.5px] backdrop-filter bg-white h-[68px] left-0 rounded-[12px] top-0 w-[388px]" />
      <Frame30 />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] left-[321px] not-italic text-[#074e59] text-[14px] text-nowrap top-[47.5px] translate-y-[-50%]">
        <p className="leading-[normal]">AED 450</p>
      </div>
      <div className="absolute h-[27px] left-[13px] top-[26px] w-[68px]" data-name="Express Delivery 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[368.57%] left-[-23.86%] max-w-none top-[-142.86%] w-[146.59%]" src={imgExpressDelivery1} />
        </div>
      </div>
    </div>
  );
}

function Delete() {
  return (
    <Delete2 additionalClassNames="absolute left-[10px] top-[5px]">
      <path clipRule="evenodd" d={svgPaths.p30cdb380} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector" />
      <path clipRule="evenodd" d={svgPaths.p9f89e80} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector_2" />
      <path clipRule="evenodd" d={svgPaths.p1ab89780} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector_3" />
    </Delete2>
  );
}

function Add() {
  return (
    <div className="absolute left-[69px] overflow-clip size-[16px] top-[5px]" data-name="Add">
      <Helper />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute h-[26px] left-[125px] top-[82px] w-[95px]">
      <div className="absolute backdrop-blur-[9.5px] backdrop-filter bg-white border border-[#d6d2c3] border-solid h-[26px] left-0 rounded-[38px] top-0 w-[95px]" />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] left-[calc(50%-2.5px)] not-italic text-[#074e59] text-[14px] text-nowrap top-[11.5px] translate-y-[-50%]">
        <p className="leading-[normal]">1</p>
      </div>
      <Delete />
      <Add />
    </div>
  );
}

function Frame33() {
  return (
    <div className="[grid-area:1_/_1] h-[120px] ml-0 mt-0 relative w-[390px]">
      <div className="absolute backdrop-blur-[9.5px] backdrop-filter bg-white h-[120px] left-0 rounded-[12px] top-0 w-[390px]" />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] left-[306px] not-italic text-[#074e59] text-[0px] text-nowrap top-[95.5px] translate-y-[-50%]">
        <p className="leading-[normal] text-[18px]">
          <span className="font-['Founders_Grotesk:Regular',sans-serif] not-italic">AED</span>
          <span>{` 320`}</span>
        </p>
      </div>
      <Frame35 />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] left-[125px] not-italic text-[#074e59] text-[16px] top-[31px] translate-y-[-50%] w-[243px]">
        <p className="leading-[normal]">Birthday Colourful Gypsophila Flowers Bouquet</p>
      </div>
      <div className="absolute left-[10px] rounded-[8px] size-[100px] top-[10px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle813693} />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame33 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute left-1/2 size-[8px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Wrapper1 additionalClassNames="inset-[0_-7.5%]">
        <g id="Frame 2609683">
          <path d="M0.6 3.99988H8.6" id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </Wrapper1>
    </div>
  );
}

function Add1() {
  return (
    <div className="absolute left-[10px] overflow-clip size-[16px] top-[5px]" data-name="Add">
      <Frame32 />
    </div>
  );
}

function Add2() {
  return (
    <div className="absolute left-[69px] overflow-clip size-[16px] top-[5px]" data-name="Add">
      <Helper />
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute h-[26px] left-[124px] top-[82px] w-[95px]">
      <div className="absolute backdrop-blur-[9.5px] backdrop-filter bg-white border border-[#d6d2c3] border-solid h-[26px] left-0 rounded-[38px] top-0 w-[95px]" />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] left-[calc(50%-3.5px)] not-italic text-[#074e59] text-[14px] text-nowrap top-[11.5px] translate-y-[-50%]">
        <p className="leading-[normal]">3</p>
      </div>
      <Add1 />
      <Add2 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[120px] relative shrink-0 w-full">
      <div className="absolute backdrop-blur-[9.5px] backdrop-filter bg-white h-[120px] left-0 rounded-[12px] top-0 w-[390px]" />
      <div className="absolute left-[9px] rounded-[8px] size-[100px] top-[10px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle813694} />
      </div>
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] left-[372px] not-italic text-[#074e59] text-[0px] text-nowrap text-right top-[95.5px] translate-x-[-100%] translate-y-[-50%]">
        <p className="leading-[normal] text-[18px]">
          <span className="font-['Founders_Grotesk:Regular',sans-serif] not-italic">AED</span>
          <span>{` 870`}</span>
        </p>
      </div>
      <Frame36 />
      <p className="absolute font-['Founders_Grotesk:Regular',sans-serif] leading-[normal] left-[124px] not-italic text-[#074e59] text-[16px] top-[12px] w-[243px]">Summer Floral Vibe Bundle</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Group6 />
      <Frame34 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute h-[198px] left-[20px] top-[69px] w-[167px]">
      <div className="absolute left-0 rounded-[12px] size-[167px] top-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle813381} />
      </div>
      <p className="absolute font-['Founders_Grotesk:Regular',sans-serif] leading-[normal] left-[30px] not-italic overflow-ellipsis overflow-hidden text-[#074e59] text-[14px] text-nowrap top-[181px]">Select Card Design</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute h-[22px] left-[-2px] top-[5px] w-[21px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 22">
        <g id="Frame 2608864">
          <path d={svgPaths.p6c37480} fill="var(--fill-0, #074E59)" id="Vector" stroke="var(--stroke-0, #074E59)" />
          <path clipRule="evenodd" d={svgPaths.p21760a00} fill="var(--fill-0, #8BAAAD)" fillRule="evenodd" id="Vector_2" opacity="0.4" />
          <path clipRule="evenodd" d={svgPaths.p113f9d00} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute h-[28px] left-[18px] top-[16px] w-[224px]">
      <Frame20 />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] left-[29px] not-italic text-[#074e59] text-[18px] text-nowrap top-[16.5px] translate-y-[-50%]">
        <p className="leading-[normal]">{`Gift Card & Message`}</p>
      </div>
    </div>
  );
}

function FlatLogo() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[32px] top-[35px] translate-x-[-50%]" data-name="Flat Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Flat Logo">
          <path d={svgPaths.p150d4800} fill="var(--fill-0, #B98D81)" id="Vector" />
          <path d={svgPaths.p23b2adc0} fill="var(--fill-0, #B98D81)" id="Vector_2" />
          <path d={svgPaths.p188d5700} fill="var(--fill-0, #B98D81)" id="Vector_3" />
          <path d={svgPaths.p2c17b200} fill="var(--fill-0, #B98D81)" id="Vector_4" />
          <path d={svgPaths.p280bf600} fill="var(--fill-0, #B98D81)" id="Vector_5" />
          <path d={svgPaths.p246a3e00} fill="var(--fill-0, #B98D81)" id="Vector_6" />
          <path d={svgPaths.p2b4dec00} fill="var(--fill-0, #B98D81)" id="Vector_7" />
          <path d={svgPaths.p2191e70} fill="var(--fill-0, #B98D81)" id="Vector_8" />
          <path d={svgPaths.p24d9ba80} fill="var(--fill-0, #B98D81)" id="Vector_9" />
          <path d={svgPaths.p30bfe600} fill="var(--fill-0, #B98D81)" id="Vector_10" />
          <path d={svgPaths.p182c7100} fill="var(--fill-0, #B98D81)" id="Vector_11" />
          <path d={svgPaths.p3152e530} fill="var(--fill-0, #B98D81)" id="Vector_12" />
          <path d={svgPaths.p2ea9a200} fill="var(--fill-0, #B98D81)" id="Vector_13" />
          <path d={svgPaths.pd429380} fill="var(--fill-0, #B98D81)" id="Vector_14" />
          <path d={svgPaths.p38a5b100} fill="var(--fill-0, #B98D81)" id="Vector_15" />
        </g>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute left-0 size-[167px] top-0">
      <div className="absolute bg-white border border-[#8baaad] border-dashed left-0 rounded-[12px] shadow-[0px_4px_4px_0px_rgba(108,108,108,0.1)] size-[167px] top-0" />
      <p className="absolute font-['Founders_Grotesk:Regular',sans-serif] leading-[normal] left-[84px] not-italic opacity-70 text-[#074e59] text-[14px] text-center top-[87px] translate-x-[-50%] w-[120px]">Tap here to add a message</p>
      <FlatLogo />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute h-[198px] left-[203px] top-[69px] w-[167px]">
      <p className="absolute font-['Founders_Grotesk:Regular',sans-serif] leading-[normal] left-[41px] not-italic overflow-ellipsis overflow-hidden text-[#074e59] text-[14px] text-nowrap top-[181px]">Add a Message</p>
      <Frame48 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Founders_Grotesk:Semibold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#074e59] text-[16px] text-nowrap tracking-[-0.32px]">
        <p className="leading-[1.187]">Customize</p>
      </div>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="absolute content-stretch flex h-[52px] items-center justify-center left-[15px] px-[24px] py-[14px] rounded-[48px] top-[301px] w-[359px]" data-name="Secondary button">
      <div aria-hidden="true" className="absolute border border-[#074e59] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <Frame22 />
    </div>
  );
}

function ProductCard() {
  return (
    <div className="bg-white h-[373px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Product Card">
      <div className="absolute bg-white border border-[#f7f6f2] border-solid left-[20px] rounded-[12px] shadow-[0px_4px_4px_0px_rgba(108,108,108,0.1)] size-[167px] top-[69px]" />
      <Frame50 />
      <div className="absolute left-[212px] rounded-[6px] size-[162px] top-[73px]" />
      <Frame21 />
      <Frame49 />
      <SecondaryButton />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] left-[340px] not-italic text-[#94b651] text-[16px] text-nowrap top-[34.5px] translate-y-[-50%]">
        <p className="leading-[normal]">Free</p>
      </div>
    </div>
  );
}

function Balloon() {
  return (
    <Wrapper2 additionalClassNames="inset-[-4.5%_84.88%_-3.46%_-1.37%]">
      <g id="Balloon">
        <path clipRule="evenodd" d={svgPaths.p20a66280} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector" />
        <path clipRule="evenodd" d={svgPaths.p2cf75f00} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector_2" />
        <path clipRule="evenodd" d={svgPaths.p1fda440} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector_3" />
        <path clipRule="evenodd" d={svgPaths.p3dac0230} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector_4" />
        <path clipRule="evenodd" d={svgPaths.p20f91af0} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector_5" />
        <path clipRule="evenodd" d={svgPaths.p172a2e00} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector_6" />
        <path clipRule="evenodd" d={svgPaths.p1c76300} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector_7" />
        <path clipRule="evenodd" d={svgPaths.p3523f4c0} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector_8" />
      </g>
    </Wrapper2>
  );
}

function Frame41() {
  return (
    <div className="h-[22.23px] relative shrink-0 w-[145.5px]">
      <Balloon />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] left-[28.5px] not-italic text-[#074e59] text-[18px] text-nowrap top-[10.5px] translate-y-[-50%]">
        <p className="leading-[normal]">Make it extra special</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[24px] py-0 relative w-full">
          <p className="capitalize font-['Founders_Grotesk:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#074e59] text-[16px] text-nowrap">Best Match</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] h-[38px] items-start relative shrink-0">
      <Frame11 />
      <div className="h-0 relative shrink-0 w-[76px]">
        <div className="absolute inset-[-1px_-1.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 2">
            <path d="M1 1H77" id="Line 6" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0">
      <Text text="Balloons" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0">
      <Text text="Tea and Coffee" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0">
      <Text1 text="Candles" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0">
      <Text1 text="Tea and Coffee" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-x-auto overflow-y-clip relative shrink-0 w-full">
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame13 />
      <Frame15 />
      <Frame16 />
      <Frame15 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-0 relative w-[358px]">
      <Frame17 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[37.5px] relative w-[358px]">
        <div className="absolute inset-[-0.5px_0]" style={{ "--fill-0": "rgba(7, 78, 89, 1)", "--stroke-0": "rgba(230, 229, 224, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 1">
            <path d="M0 0.5H358" id="Line 5" stroke="var(--stroke-0, #E6E5E0)" />
          </svg>
        </div>
      </div>
      <Frame39 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center justify-center ml-0 mt-0 p-[4px] relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border-[#074e59] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[8.75px]" />
      <div className="relative rounded-[7.33px] shrink-0 size-[103px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7.33px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Frame6 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#074e59]">
      <Helper1 text="AED" text1="90" />
      <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[14px] text-nowrap">
        <p className="leading-[normal]">16 Pcs Chocolate...</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Group1 />
      <Frame1 />
    </div>
  );
}

function Delete1() {
  return (
    <Delete2 additionalClassNames="relative shrink-0">
      <path clipRule="evenodd" d={svgPaths.p30cdb380} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector" />
      <path clipRule="evenodd" d={svgPaths.p12d2f400} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector_2" />
      <path clipRule="evenodd" d={svgPaths.pc502b00} fill="var(--fill-0, #074E59)" fillRule="evenodd" id="Vector_3" />
    </Delete2>
  );
}

function Add3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Add">
      <Helper />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f7f6f2] content-stretch flex h-[34px] items-center justify-between px-[16px] py-[12px] relative rounded-[230px] shrink-0 w-[108px]">
      <div aria-hidden="true" className="absolute border border-[#074e59] border-solid inset-0 pointer-events-none rounded-[230px]" />
      <Delete1 />
      <div className="flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#074e59] text-[16px] text-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
      <Add3 />
    </div>
  );
}

function SingleProduct() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[111.333px]" data-name="Single Product">
      <Frame7 />
      <Frame4 />
    </div>
  );
}

function Frame10() {
  return (
    <Wrapper3>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7.33px] size-full" src={imgImage1} />
    </Wrapper3>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[0] relative shrink-0 w-[87px]">
      <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[12px] text-nowrap">
        <p className="leading-[normal]">AED</p>
      </div>
      <div className="flex flex-col font-['Founders_Grotesk:Medium',sans-serif] h-[11px] justify-center relative shrink-0 text-[16px] w-[27px]">
        <p className="leading-[normal]">80</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[#074e59] w-[108px]">
      <Frame28 />
      <p className="font-['Founders_Grotesk:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[14px] w-[min-content]">Floward Chocolat...</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Group />
      <Frame2 />
    </div>
  );
}

function SingleProduct1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[111.333px]" data-name="Single Product">
      <Frame8 />
      <TabItemText text="Add" />
    </div>
  );
}

function Frame18() {
  return (
    <Wrapper3>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7.33px] size-full" src={imgImage2} />
    </Wrapper3>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Frame18 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#074e59]">
      <Helper1 text="AED" text1="150" />
      <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[14px] text-nowrap">
        <p className="leading-[normal]">Pistachio Rocher...</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Group4 />
      <Frame3 />
    </div>
  );
}

function SingleProduct2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[111.333px]" data-name="Single Product">
      <Frame9 />
      <TabItemText text="Add" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <SingleProduct />
      <SingleProduct1 />
      <SingleProduct2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[24px] relative w-full">
          <Frame41 />
          <Group5 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#f7f6f2] content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full">
      <Frame19 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute h-[17px] leading-[0] left-0 not-italic text-[#074e59] text-[14px] text-nowrap top-[20px] w-[348px]">
      <div className="absolute flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center left-0 top-[8.5px] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap">Subtotal</p>
      </div>
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center left-[298px] top-[8.5px] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap">
          <span className="font-['Founders_Grotesk:Regular',sans-serif] not-italic">AED</span> <span className="font-['Founders_Grotesk:Semibold',sans-serif] not-italic">610</span>
        </p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute h-[57px] leading-[0] left-0 not-italic text-[#074e59] text-[14px] top-[49px] w-[348px]">
      <div className="absolute flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center left-0 opacity-70 top-[40px] translate-y-[-50%] w-[255px]">
        <p className="leading-[normal]">Please note that specific regions and express delivery may incur extra delivery fees</p>
      </div>
      <div className="absolute flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center left-0 text-nowrap top-[8.5px] translate-y-[-50%]">
        <p className="leading-[normal]">Delivery Charges</p>
      </div>
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center left-[348px] text-nowrap text-right top-[8.5px] translate-x-[-100%] translate-y-[-50%]">
        <p className="leading-[normal]">
          <span className="font-['Founders_Grotesk:Regular',sans-serif] not-italic">AED</span>
          <span>{` 3`}</span>
          <span className="font-['Founders_Grotesk:Semibold',sans-serif] not-italic">0</span>
        </p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute h-[126px] left-[20px] top-[64px] w-[348px]">
      <Frame43 />
      <Frame44 />
      <Helper2 additionalClassNames="top-[126px]" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute font-['Founders_Grotesk:Medium',sans-serif] h-[19px] leading-[0] left-[20px] not-italic text-[#074e59] text-nowrap top-[208px] w-[347px]">
      <div className="absolute flex flex-col justify-center left-0 text-[14px] top-[9.5px] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap">Total</p>
      </div>
      <div className="absolute capitalize flex flex-col justify-center left-[287px] text-[0px] top-[9.5px] translate-y-[-50%]">
        <p className="leading-[normal] text-[16px] text-nowrap">
          <span className="capitalize font-['Founders_Grotesk:Regular',sans-serif] not-italic">AED</span> <span className="capitalize font-['Founders_Grotesk:Semibold',sans-serif] not-italic">640</span>
        </p>
      </div>
    </div>
  );
}

function ReceiptBill() {
  return (
    <Wrapper2 additionalClassNames="inset-[0_93.1%_45.45%_0]">
      <g id="Receipt bill">
        <path d={svgPaths.p3c2da200} id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p1dc9a560} id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p3bdba600} id="Vector_3" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </Wrapper2>
  );
}

function Frame42() {
  return (
    <div className="absolute h-[44px] left-[20px] top-[20px] w-[348px]">
      <Helper2 additionalClassNames="top-[44px]" />
      <ReceiptBill />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] left-[31px] not-italic text-[#074e59] text-[18px] text-nowrap top-[11.5px] translate-y-[-50%]">
        <p className="leading-[normal]">Order Summary</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="h-[246px] relative shrink-0 w-full">
      <div className="absolute backdrop-blur-[9.5px] backdrop-filter bg-white h-[246px] left-0 rounded-[12px] top-0 w-[390px]" />
      <Frame46 />
      <Frame45 />
      <Frame42 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[20px] top-[124px] w-[390px]">
      <Frame31 />
      <Frame51 />
      <ProductCard />
      <Frame40 />
      <Frame47 />
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
    <div className="absolute content-stretch flex items-center justify-between left-0 overflow-clip pb-[14px] pl-[27px] pr-[26px] pt-[18px] top-0 w-[430px]" data-name="Status Bar (iPhone)">
      <TimeIPhone />
      <CellularWifiBatteryIPhone />
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-[19px] relative shrink-0 w-[121px]">
      <div className="absolute flex flex-col font-['Founders_Grotesk:Semibold',sans-serif] justify-center leading-[0] left-[40px] not-italic text-[18px] text-nowrap text-white top-[9.5px] translate-y-[-50%]">
        <p className="leading-[normal]">AED 640</p>
      </div>
      <div className="absolute flex h-[8px] items-center justify-center left-[115px] top-[6px] w-[4px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[4px] relative w-[8px]" data-name="Stroke-1">
            <div className="absolute inset-[-18.75%_-9.38%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                <path d={svgPaths.p20491580} id="Stroke-1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[327px]">
      <div className="capitalize flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white">
        <p className="font-['Founders_Grotesk:Bold',sans-serif] leading-[normal] text-[16px]">Proceed to Checkout</p>
      </div>
      <Frame38 />
    </div>
  );
}

function ButtonOutline() {
  return (
    <div className="absolute bg-[#074e59] h-[58px] left-1/2 rounded-[54px] top-[14px] translate-x-[-50%] w-[390px]" data-name="Button Outline">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[289px] py-[16px] relative size-full">
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute backdrop-blur-[5px] backdrop-filter bg-[rgba(247,246,242,0.9)] h-[179px] left-0 overflow-clip shadow-[0px_-64px_18px_0px_rgba(0,0,0,0),0px_-41px_16px_0px_rgba(0,0,0,0.01),0px_-23px_14px_0px_rgba(0,0,0,0.02),0px_-10px_10px_0px_rgba(0,0,0,0.03),0px_-3px_6px_0px_rgba(0,0,0,0.04)] top-[-89px] w-[430px]">
      <ButtonOutline />
    </div>
  );
}

function Explore() {
  return (
    <Wrapper5 additionalClassNames="relative shrink-0 size-[30px]">
      <g id="Explore">
        <g id="Platter"></g>
        <path d={svgPaths.p1d7fa600} id="Vector" stroke="var(--stroke-0, #074E59)" strokeMiterlimit="10" />
        <path d={svgPaths.p140f0380} id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeMiterlimit="10" />
        <path d={svgPaths.p3aa4ff70} id="Vector_3" stroke="var(--stroke-0, #074E59)" strokeMiterlimit="10" />
      </g>
    </Wrapper5>
  );
}

function TabBarItemActive() {
  return (
    <div className="absolute bg-[rgba(247,246,242,0)] bottom-[25.56%] content-stretch flex flex-col items-center justify-end left-0 opacity-50 px-[25px] py-[14px] top-0 w-[86px]" data-name="Tab bar Item Active">
      <Explore />
      <div className="capitalize flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#074e59] text-[12px] text-center text-nowrap">
        <p className="leading-[14px]">Home</p>
      </div>
    </div>
  );
}

function Bag() {
  return (
    <Wrapper4 additionalClassNames="left-1/2 top-[11px] translate-x-[-50%]">
      <g id="Bag">
        <g id="Platter"></g>
        <path d={svgPaths.p12364840} id="Vector" stroke="var(--stroke-0, #074E59)" strokeMiterlimit="10" />
        <path d={svgPaths.p46344f0} id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeMiterlimit="10" />
      </g>
    </Wrapper4>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[173px] top-0">
      <TabBarItemActiveText text="cart" additionalClassNames="w-[86px]" />
      <Bag />
    </div>
  );
}

function CalendarDotted() {
  return (
    <div className="absolute inset-[23.33%_23.4%_23.63%_23.33%]" data-name="Calendar Dotted">
      <div className="absolute inset-[-0.94%_-1%_-0.88%_-0.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <g id="Calendar Dotted">
            <path d={svgPaths.p380f4500} id="Vector" stroke="var(--stroke-0, #608A8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            <path d="M5.74 0.65V3.54" id="Vector_2" stroke="var(--stroke-0, #608A8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            <path d="M10.54 0.65V3.54" id="Vector_3" stroke="var(--stroke-0, #608A8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            <g id="Heart Outline">
              <path d={svgPaths.p14a7f500} id="Vector_4" stroke="var(--stroke-0, #608A8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute left-[28px] size-[30px] top-[11px]" data-name="Component 3">
      <div className="absolute bg-[rgba(234,233,229,0)] inset-0 rounded-[6px]" data-name="Platter" />
      <CalendarDotted />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[260px] opacity-50 top-0">
      <TabBarItemActiveText text="Moments" additionalClassNames="w-[86px]" />
      <Component />
    </div>
  );
}

function Profile() {
  return (
    <Wrapper4 additionalClassNames="left-1/2 top-[10px] translate-x-[-50%]">
      <g id="Profile">
        <g id="Platter"></g>
        <path d={svgPaths.p2f01b880} id="Vector" stroke="var(--stroke-0, #074E59)" strokeMiterlimit="10" />
        <path d={svgPaths.pd715b00} id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeMiterlimit="10" />
      </g>
    </Wrapper4>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[346px] opacity-50 top-0 w-[86px]">
      <TabBarItemActiveText text="Profile" additionalClassNames="w-[86px]" />
      <Profile />
    </div>
  );
}

function Search() {
  return (
    <Wrapper4 additionalClassNames="left-0 top-0">
      <g id="Search">
        <g id="Platter"></g>
        <path d={svgPaths.p3020eb00} id="Vector" stroke="var(--stroke-0, #074E59)" strokeMiterlimit="10" />
        <path d="M18.21 18.1L22.9 22.9" id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Wrapper4>
  );
}

function ItemsList() {
  return (
    <div className="absolute inset-[26.67%_63.31%_36.67%_0.02%]" data-name="Items List">
      <div className="absolute inset-[-4.55%_0_0_-13.64%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
          <g id="Items List">
            <path d="M0.5 0.5H6.5" id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0.5 5.5H6.5" id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0.5 10.5H6.5" id="Vector_3" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[30px] top-[9px] translate-x-[-50%]">
      <Search />
      <ItemsList />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[86px] opacity-50 top-0">
      <TabBarItemActiveText text="Catalogue" additionalClassNames="w-[87px]" />
      <Frame />
    </div>
  );
}

function TabBarExplore() {
  return (
    <div className="absolute bottom-0 h-[90px] left-0 w-[430px]" data-name="Tab bar Explore">
      <Frame29 />
      <div className="absolute backdrop-blur-[5px] backdrop-filter bottom-0 left-1/2 top-0 translate-x-[-50%] w-[430px]" data-name="Blur Layer" />
      <TabBarItemActive />
      <Frame24 />
      <Frame26 />
      <Frame23 />
      <Frame25 />
      <div className="absolute bg-black bottom-[10px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

export default function Cart() {
  return (
    <div className="bg-[#f7f6f2] relative size-full" data-name="Cart">
      <TabBarExplore />
      <RightArrow1 />
      <div className="absolute flex flex-col font-['Montas:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-48px)] not-italic text-[#074e59] text-[32px] text-nowrap top-[83px] translate-y-[-50%]">
        <p className="leading-[normal]">Cart (2)</p>
      </div>
      <Frame52 />
      <StatusBarIPhone />
    </div>
  );
}
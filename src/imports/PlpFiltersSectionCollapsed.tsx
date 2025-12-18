import svgPaths from "./svg-8sqv9qoe5f";
import clsx from "clsx";
import { imgStatusBarIPhone } from "./svg-eag9v";
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties} className={clsx("absolute flex items-center justify-center left-[346px] size-[24px]", additionalClassNames)}>
      {children}
    </div>
  );
}

function BaseCheckboxItemBackgroundImage() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]">
      <div aria-hidden="true" className="absolute border border-[#074e59] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function BackgroundImage2() {
  return (
    <BackgroundImage3 additionalClassNames="top-[19px]">
      <div className="flex-none rotate-[270deg]">
        <BackgroundImage />
      </div>
    </BackgroundImage3>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function BackgroundImage1({ text, text1, additionalClassNames = "" }: BackgroundImage1Props) {
  return (
    <div className={clsx("absolute h-[84px] left-[20px] w-[390px]", additionalClassNames)}>
      <div className="absolute backdrop-blur-[9.5px] backdrop-filter bg-white h-[84px] left-1/2 rounded-[12px] top-0 translate-x-[-50%] w-[390px]" />
      <BackgroundImage2 />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] left-[20px] not-italic text-[#074e59] text-[18px] text-nowrap top-[31px] tracking-[-0.18px] translate-y-[-50%]">
        <p className="leading-[1.2]">{text}</p>
      </div>
      <p className="absolute font-['Founders_Grotesk:Regular',sans-serif] leading-[normal] left-[20px] not-italic text-[#074e59] text-[16px] text-nowrap top-[50px]">{text1}</p>
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="relative size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 2609670">
          <path d={svgPaths.p148c1880} id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Founders_Grotesk:Regular',sans-serif] gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap">
      <p className="relative shrink-0 text-[#074e59]">{`Flowers & Cakes`}</p>
      <p className="relative shrink-0 text-[#8baaad] text-right">(120)</p>
    </div>
  );
}

function CheckRadio() {
  return (
    <div className="opacity-0 relative shrink-0 size-[20px]" data-name="Check_Radio">
      <div className="absolute bg-white inset-0 rounded-[4px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame1 />
      <CheckRadio />
    </div>
  );
}

function ContextMenuItem() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[20px] py-[16px] top-[62px] w-[390px]" data-name="_context menu item">
      <div aria-hidden="true" className="absolute border-[#f7f6f2] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <Frame />
      <BaseCheckboxItemBackgroundImage />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex font-['Founders_Grotesk:Regular',sans-serif] gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap">
      <p className="relative shrink-0 text-[#074e59]">{`Flowers & Chocolates`}</p>
      <p className="relative shrink-0 text-[#8baaad] text-right">(120)</p>
    </div>
  );
}

function CheckRadio1() {
  return (
    <div className="opacity-0 relative shrink-0 size-[20px]" data-name="Check_Radio">
      <div className="absolute bg-white inset-0 rounded-[4px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame2 />
      <CheckRadio1 />
    </div>
  );
}

function ContextMenuItem1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[20px] py-[16px] top-[113px] w-[390px]" data-name="_context menu item">
      <div aria-hidden="true" className="absolute border-[#f7f6f2] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <Frame3 />
      <BaseCheckboxItemBackgroundImage />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex font-['Founders_Grotesk:Regular',sans-serif] gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap">
      <p className="relative shrink-0 text-[#074e59]">{`Flowers & Perfumes`}</p>
      <p className="relative shrink-0 text-[#8baaad] text-right">(120)</p>
    </div>
  );
}

function CheckRadio2() {
  return (
    <div className="opacity-0 relative shrink-0 size-[20px]" data-name="Check_Radio">
      <div className="absolute bg-white inset-0 rounded-[4px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame4 />
      <CheckRadio2 />
    </div>
  );
}

function ContextMenuItem2() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[20px] py-[16px] top-[164px] w-[390px]" data-name="_context menu item">
      <div aria-hidden="true" className="absolute border-[#f7f6f2] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <Frame5 />
      <BaseCheckboxItemBackgroundImage />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex font-['Founders_Grotesk:Regular',sans-serif] gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap">
      <p className="relative shrink-0 text-[#074e59]">{`Flowers & Candles`}</p>
      <p className="relative shrink-0 text-[#8baaad] text-right">(120)</p>
    </div>
  );
}

function CheckRadio3() {
  return (
    <div className="opacity-0 relative shrink-0 size-[20px]" data-name="Check_Radio">
      <div className="absolute bg-white inset-0 rounded-[4px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame6 />
      <CheckRadio3 />
    </div>
  );
}

function ContextMenuItem3() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[20px] py-[16px] top-[215px] w-[390px]" data-name="_context menu item">
      <div aria-hidden="true" className="absolute border-[#f7f6f2] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame7 />
      <BaseCheckboxItemBackgroundImage />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[276px] left-[20px] top-[276px] w-[390px]">
      <div className="absolute backdrop-blur-[9.5px] backdrop-filter bg-white h-[276px] left-1/2 rounded-[12px] top-0 translate-x-[-50%] w-[390px]" />
      <ContextMenuItem />
      <ContextMenuItem1 />
      <ContextMenuItem2 />
      <ContextMenuItem3 />
      <BackgroundImage3 additionalClassNames="top-[20px]">
        <div className="flex-none rotate-[90deg]">
          <BackgroundImage />
        </div>
      </BackgroundImage3>
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] left-[20px] not-italic text-[#074e59] text-[18px] text-nowrap top-[31px] tracking-[-0.18px] translate-y-[-50%]">
        <p className="leading-[1.2]">Bundle Type</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[62px] left-[20px] top-[676px] w-[390px]">
      <div className="absolute backdrop-blur-[9.5px] backdrop-filter bg-white h-[62px] left-1/2 rounded-[12px] top-0 translate-x-[-50%] w-[390px]" />
      <BackgroundImage2 />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] left-[20px] not-italic text-[#074e59] text-[18px] text-nowrap top-[31px] tracking-[-0.18px] translate-y-[-50%]">
        <p className="leading-[1.2]">Price</p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="absolute h-[115px] left-0 top-0 w-[430px]" data-name="CTA">
      <div className="absolute backdrop-blur-[5px] backdrop-filter bg-[rgba(247,246,242,0.9)] inset-[-5.22%_0_0_0] shadow-[0px_-64px_18px_0px_rgba(0,0,0,0),0px_-41px_16px_0px_rgba(0,0,0,0.01),0px_-23px_14px_0px_rgba(0,0,0,0.02),0px_-10px_10px_0px_rgba(0,0,0,0.03),0px_-3px_6px_0px_rgba(0,0,0,0.04)]" />
      <div className="absolute bg-black inset-[81.25%_34.42%_13.54%_34.42%] rounded-[100px]" data-name="Home Indicator" />
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="absolute bg-[#074e59] bottom-[42px] content-stretch flex gap-[8px] h-[60px] items-center justify-center left-1/2 px-[24px] py-[14px] rounded-[58px] translate-x-[-50%] w-[390px]" data-name="Secondary button">
      <div className="flex flex-col font-['Founders_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[0.08px]">
        <p className="leading-[normal]">Show 115 Products</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bottom-0 h-[115px] left-0 w-[430px]">
      <Cta />
      <SecondaryButton />
    </div>
  );
}

function TimeIPhone() {
  return (
    <div className="h-[21px] relative shrink-0 w-[54px]" data-name="🧰/Time (iPhone)">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] left-[27px] not-italic text-[17px] text-center text-white top-[calc(50%-10.5px)] tracking-[-0.408px] translate-x-[-50%] w-[54px]">9:41</p>
    </div>
  );
}

function CellularWifiBatteryIPhone() {
  return (
    <div className="h-[13px] relative shrink-0 w-[78.261px]" data-name="🧰/Cellular,Wifi,Battery (iPhone)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 13">
        <g id="ð§°/Cellular,Wifi,Battery (iPhone)">
          <g id="Battery">
            <rect height="12" id="Border" opacity="0.35" rx="3" stroke="var(--stroke-0, white)" width="24" x="51.4333" y="0.5" />
            <path d={svgPaths.p25b67360} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, white)" height="9" id="Capacity" rx="1.33333" width="21" x="52.9333" y="2" />
          </g>
          <path d={svgPaths.p2eadca80} fill="var(--fill-0, white)" id="Wifi" />
          <path d={svgPaths.p31669080} fill="var(--fill-0, white)" id="Cellular Connection" />
        </g>
      </svg>
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[430px_147px] pb-[14px] pl-[27px] pr-[26px] pt-[18px] top-0 w-[428px]" data-name="Status Bar (iPhone)" style={{ maskImage: `url('${imgStatusBarIPhone}')` }}>
      <TimeIPhone />
      <CellularWifiBatteryIPhone />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute left-[13px] size-[14px] top-[13px]">
      <div className="absolute inset-[-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Frame 2609417">
            <path d="M14.75 0.75L0.75 14.75" id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M0.75 0.75L14.75 14.75" id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute left-[367px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-367px_-89px] mask-size-[430px_147px] size-[40px] top-[89px]" style={{ maskImage: `url('${imgStatusBarIPhone}')` }}>
      <div className="absolute bg-[#f7f6f2] inset-0 rounded-[50px]" data-name="Platter" />
      <Frame8 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[367px] top-[89px]">
      <Frame9 />
    </div>
  );
}

function DividerHorizontal() {
  return <div className="absolute bg-[#e6e5e0] h-px left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-147px] mask-size-[430px_147px] right-0 top-[147px]" data-name="divider /horizontal" style={{ maskImage: `url('${imgStatusBarIPhone}')` }} />;
}

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute bg-[#1b1d21] h-[147px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[430px_147px] shadow-[0px_8px_16px_0px_rgba(16,24,40,0.08),0px_24px_64px_0px_rgba(16,24,40,0.04)] top-0 w-[430px]" style={{ maskImage: `url('${imgStatusBarIPhone}')` }} />
      <div className="absolute h-[960px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-68px] mask-size-[430px_147px] top-[68px] w-[430px]" style={{ maskImage: `url('${imgStatusBarIPhone}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 430 960">
          <path d={svgPaths.p2973a500} fill="var(--fill-0, white)" id="Rectangle 813382" />
        </svg>
      </div>
      <p className="absolute font-['Montas:Regular',sans-serif] leading-[normal] left-[calc(50%-34px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-181px_-94px] mask-size-[430px_147px] not-italic text-[#074e59] text-[28px] text-nowrap top-[94px]" style={{ maskImage: `url('${imgStatusBarIPhone}')` }}>
        Filters
      </p>
      <StatusBarIPhone />
      <DividerHorizontal />
      <div className="absolute flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] left-[20px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-20px_-103px] mask-size-[430px_147px] not-italic text-[#074e59] text-[0px] top-[112.5px] translate-y-[-50%] w-[62px]" style={{ maskImage: `url('${imgStatusBarIPhone}')` }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] text-[16px] underline">Clear All</p>
      </div>
      <div className="absolute bg-[#cacbcd] h-[8px] left-[16px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-16px_-62px] mask-size-[430px_147px] rounded-tl-[10px] rounded-tr-[10px] top-[62px] w-[397px]" style={{ maskImage: `url('${imgStatusBarIPhone}')` }} />
      <Group />
    </div>
  );
}

export default function PlpFiltersSectionCollapsed() {
  return (
    <div className="relative size-full" data-name="PLP - Filters Section Collapsed" style={{ backgroundImage: "linear-gradient(rgb(249, 249, 249) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Frame10 />
      <MaskGroup />
      <div className="absolute h-[1116px] left-0 top-[148px] w-[430px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 430 1116">
          <path d="M0 0H430V1116H0V0Z" fill="var(--fill-0, #F7F6F2)" id="Rectangle 813381" />
        </svg>
      </div>
      <BackgroundImage1 text="Categories" text1="Flowers" additionalClassNames="top-[172px]" />
      <Frame11 />
      <BackgroundImage1 text="Color" text1="Red, White, Purple" additionalClassNames="top-[572px]" />
      <Frame12 />
    </div>
  );
}
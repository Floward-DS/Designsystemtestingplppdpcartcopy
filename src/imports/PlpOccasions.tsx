import svgPaths from "./svg-dwjl1898ju";
import clsx from "clsx";
import imgRectangle813636 from "figma:asset/df3f2ec56398611caecdb1dfa9a4cbc4b41afa59.png";
import imgRectangle813637 from "figma:asset/ab7a3fae8b6fa0d0a47bc1115906fb9e2d62375d.png";
import imgImage6 from "figma:asset/fa00364754a5b53cb697132d01b4cfc1b3a16edc.png";
import imgImage7 from "figma:asset/4e2b4896197aabb048945dea681123a7de61ed93.png";
import imgImage8 from "figma:asset/4bb44f387a6bcf42c26923ed6059b4ba3c3649a1.png";
import imgImage9 from "figma:asset/6b9fb2e5aba011a78b3300e9f7cedf17ff264f70.png";
import imgImage10 from "figma:asset/6a8a52a2fa2fcd50364577c3c7bbcd13515199d9.png";
import { imgImage5 } from "./svg-7y98j";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper2 additionalClassNames={clsx("absolute size-[30px]", additionalClassNames)}>{children}</Wrapper2>;
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[58px] left-0 not-italic text-[#074e59] top-[201px] w-[189px]">
      <Helper text="AED" text1="320" />
      <p className="absolute font-['Founders_Grotesk:Regular',sans-serif] leading-[normal] left-0 text-[14px] top-[21px] w-[189px]">{children}</p>
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
      <div className="capitalize flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#608a8f] text-[12px] text-center text-nowrap">
        <p className="leading-[14px]">{text}</p>
      </div>
    </div>
  );
}
type TabItemTextProps = {
  text: string;
};

function TabItemText({ text }: TabItemTextProps) {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center leading-[0] overflow-clip pl-[6px] pr-[18px] py-[6px] relative rounded-[68px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_1px_4px_0px_rgba(16,24,40,0.02)] shrink-0">
      <MaskGroupImage />
      <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#074e59] text-[16px] text-nowrap tracking-[-0.16px]">
        <p className="leading-[1.2]">{text}</p>
      </div>
    </div>
  );
}

function MaskGroupImage() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.895px] mask-size-[32px_32px] ml-[-5.89px] mt-[-5.89px] relative rounded-[40px] size-[43.789px]" data-name="image 5" style={{ maskImage: `url('${imgImage7}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage8} />
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#074e59] w-[152px]">
      <Helper3 text="AED" text1="320" />
      <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] h-[16px] justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Helper3Props = {
  text: string;
  text1: string;
};

function Helper3({ text, text1 }: Helper3Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[87px]">
      <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[12px] text-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
      <div className="flex flex-col font-['Founders_Grotesk:Medium',sans-serif] h-[11px] justify-center relative shrink-0 text-[16px] w-[27px]">
        <p className="leading-[normal]">{text1}</p>
      </div>
    </div>
  );
}

function Helper2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#074e59] w-[152px]">
      <Helper1 text="AED" text1="410" />
      <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] h-[16px] justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[normal]">{`Flowers & Garden Roses`}</p>
      </div>
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
type Image1Props = {
  additionalClassNames?: string;
};

function Image1({ additionalClassNames = "" }: Image1Props) {
  return (
    <div className={clsx("rounded-[8px] size-[191px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle813637} />
    </div>
  );
}

function Image() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[191px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle813636} />
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="absolute h-[19px] leading-[0] left-0 text-nowrap top-0 w-[51px]">
      <div className="absolute flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center left-0 text-[11px] top-[9.5px] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap">{text}</p>
      </div>
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center left-[24px] text-[16px] top-[9.5px] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap">{text1}</p>
      </div>
    </div>
  );
}

function Frame14() {
  return <Wrapper>Zayan Variscite Bracelet With Silver | Elegance Vase</Wrapper>;
}

function Frame16() {
  return (
    <div className="h-[259px] relative shrink-0 w-[189px]">
      <div className="absolute left-0 rounded-[8px] size-[189px] top-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle813636} />
      </div>
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return <Wrapper>{`Flowers & Garden Roses | Elegance Vase`}</Wrapper>;
}

function Frame17() {
  return (
    <div className="h-[259px] relative shrink-0 w-[189px]">
      <Image1 additionalClassNames="absolute left-0 top-0" />
      <Frame15 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function SingleProduct() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Single Product">
      <Image1 additionalClassNames="relative shrink-0" />
      <Helper2 />
    </div>
  );
}

function SingleProduct1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Single Product">
      <Image />
      <Text text="Summer Floral Vibe Bundle" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full">
      <SingleProduct />
      <SingleProduct1 />
    </div>
  );
}

function SingleProduct2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Single Product">
      <Image />
      <Text text="Summer Floral Vibe Bundle" />
    </div>
  );
}

function SingleProduct3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Single Product">
      <Image1 additionalClassNames="relative shrink-0" />
      <Helper2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full">
      <SingleProduct2 />
      <SingleProduct3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[16px] top-[247px] w-[398px]">
      <Frame2 />
      <Frame4 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[29.41%_19.72%_32.22%_67.86%]">
      <div className="absolute inset-[-4.6%_-5.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
          <g id="Group 73754">
            <path d={svgPaths.pdac1e80} id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            <path d={svgPaths.p3f70ad00} id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[26.95%] left-[33.33%] right-[32.18%] top-1/4">
      <div className="absolute inset-[-4.46%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <g id="Group 73751">
            <path d={svgPaths.p34749a00} id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            <path d={svgPaths.p37b8ce00} id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            <path d={svgPaths.p2f0fab00} id="Vector_3" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            <path d={svgPaths.p6d22c00} id="Vector_4" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[26.95%] contents left-[33.33%] right-[32.18%] top-1/4">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[26.95%] contents left-[33.33%] right-[32.18%] top-1/4">
      <Group3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute h-[28px] left-[3px] top-[3px] w-[39px]">
      <div className="absolute bg-white inset-0 rounded-[36px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_1px_4px_0px_rgba(16,24,40,0.02)]" data-name="Background" />
      <Group1 />
    </div>
  );
}

function ProductDisplay() {
  return (
    <div className="h-[34px] relative shrink-0 w-[84px]" data-name="PRODUCT DISPLAY">
      <div className="absolute bg-[#ebeae3] inset-0 rounded-[130px]" data-name="Background" />
      <Group2 />
      <Frame18 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[197px] w-[398px]">
      <div className="flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#074e59] text-[18px] text-nowrap tracking-[-0.18px]">
        <p className="leading-[1.2]">Showing 111 Products</p>
      </div>
      <ProductDisplay />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[16px] top-[197px]">
      <Frame5 />
      <Frame13 />
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
    <div className="content-stretch flex items-center justify-between overflow-clip pl-0 pr-[16px] py-[16px] relative shrink-0 w-[413px]" data-name="Status Bar (iPhone)">
      <TimeIPhone />
      <CellularWifiBatteryIPhone />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-0">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[10px] w-full" />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 2609670">
          <path d={svgPaths.p148c1880} id="Vector" stroke="var(--stroke-0, #074E59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[37px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[16px] py-0 relative size-full">
          <Frame12 />
          <div className="flex flex-col font-['Montas:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#074e59] text-[28px] text-nowrap">
            <p className="leading-[normal]">Birthday</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.895px] mask-size-[32px_32px] ml-[-5.89px] mt-[-5.89px] relative size-[43.789px]" data-name="image 5" style={{ maskImage: `url('${imgImage5}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function TabItem() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center leading-[0] overflow-clip pl-[6px] pr-[18px] py-[6px] relative rounded-[68px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_1px_4px_0px_rgba(16,24,40,0.02)] shrink-0" data-name="_tab item">
      <MaskGroup />
      <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#074e59] text-[16px] text-nowrap tracking-[-0.16px]">
        <p className="leading-[1.2]">Flowers</p>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.895px] mask-size-[32px_32px] ml-[-5.89px] mt-[-5.89px] relative rounded-[40px] size-[43.789px]" data-name="image 5" style={{ maskImage: `url('${imgImage9}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage10} />
      </div>
    </div>
  );
}

function TabItem1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center leading-[0] overflow-clip pl-[6px] pr-[18px] py-[6px] relative rounded-[68px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_1px_4px_0px_rgba(16,24,40,0.02)] shrink-0" data-name="_tab item">
      <MaskGroup1 />
      <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#074e59] text-[16px] text-nowrap tracking-[-0.16px]">
        <p className="leading-[1.2]">Chocolates</p>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.895px] mask-size-[32px_32px] ml-[-5.89px] mt-[-5.89px] relative rounded-[40px] size-[43.789px]" data-name="image 5" style={{ maskImage: `url('${imgImage5}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function TabItem2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center leading-[0] overflow-clip pl-[6px] pr-[18px] py-[6px] relative rounded-[68px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_1px_4px_0px_rgba(16,24,40,0.02)] shrink-0" data-name="_tab item">
      <MaskGroup2 />
      <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#074e59] text-[16px] text-nowrap tracking-[-0.16px]">
        <p className="leading-[1.2]">Candles</p>
      </div>
    </div>
  );
}

function SmartFiltersCarousel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[43px] items-center relative shrink-0 w-full" data-name="Smart Filters Carousel">
      <TabItem />
      <TabItemText text="Cakes" />
      <TabItem1 />
      <TabItem2 />
      <TabItemText text="Flowers" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start ml-0 mt-0 relative w-[398px]">
      <Frame7 />
      <SmartFiltersCarousel />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-md backdrop-filter bg-[#f7f6f2] left-0 top-0 w-[430px]" data-name="Header">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[16px] pt-0 px-[16px] relative rounded-[inherit] w-full">
        <StatusBarIPhone />
        <Frame6 />
        <Group4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e6e5e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Explore() {
  return (
    <Wrapper2 additionalClassNames="relative shrink-0 size-[30px]">
      <g id="Explore">
        <g id="Platter"></g>
        <path d={svgPaths.p1d7fa600} id="Vector" stroke="var(--stroke-0, #074E59)" strokeMiterlimit="10" strokeWidth="1.3" />
        <path d={svgPaths.p140f0380} id="Vector_2" stroke="var(--stroke-0, #074E59)" strokeMiterlimit="10" strokeWidth="1.3" />
        <path d={svgPaths.p3aa4ff70} id="Vector_3" stroke="var(--stroke-0, #074E59)" strokeMiterlimit="10" strokeWidth="1.3" />
      </g>
    </Wrapper2>
  );
}

function TabBarItemActive() {
  return (
    <div className="absolute bg-[rgba(247,246,242,0)] bottom-[25.56%] content-stretch flex flex-col items-center justify-end left-0 px-[25px] py-[14px] top-[-1px] w-[86px]" data-name="Tab bar Item Active">
      <Explore />
      <div className="capitalize flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#074e59] text-[12px] text-center text-nowrap">
        <p className="leading-[14px]">Home</p>
      </div>
    </div>
  );
}

function Bag() {
  return (
    <Wrapper1 additionalClassNames="left-1/2 top-[11px] translate-x-[-50%]">
      <g id="Bag">
        <g id="Platter"></g>
        <path d={svgPaths.p12364840} id="Vector" stroke="var(--stroke-0, #608A8F)" strokeMiterlimit="10" strokeWidth="1.3" />
        <path d={svgPaths.p46344f0} id="Vector_2" stroke="var(--stroke-0, #608A8F)" strokeMiterlimit="10" strokeWidth="1.3" />
      </g>
    </Wrapper1>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[173px] top-[-1px]">
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
    <div className="absolute left-1/2 size-[30px] top-[10px] translate-x-[-50%]" data-name="Component 3">
      <div className="absolute bg-[rgba(234,233,229,0)] inset-0 rounded-[6px]" data-name="Platter" />
      <CalendarDotted />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[260px] top-[-1px]">
      <TabBarItemActiveText text="Moments" additionalClassNames="w-[86px]" />
      <Component />
    </div>
  );
}

function Profile() {
  return (
    <Wrapper1 additionalClassNames="left-1/2 top-[10px] translate-x-[-50%]">
      <g id="Profile">
        <g id="Platter"></g>
        <path d={svgPaths.p2f01b880} id="Vector" stroke="var(--stroke-0, #608A8F)" strokeMiterlimit="10" strokeWidth="1.3" />
        <path d={svgPaths.pd715b00} id="Vector_2" stroke="var(--stroke-0, #608A8F)" strokeMiterlimit="10" strokeWidth="1.3" />
      </g>
    </Wrapper1>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[346px] top-[-1px] w-[86px]">
      <TabBarItemActiveText text="Profile" additionalClassNames="w-[86px]" />
      <Profile />
    </div>
  );
}

function Search() {
  return (
    <Wrapper1 additionalClassNames="left-0 top-0">
      <g id="Search">
        <g id="Platter"></g>
        <path d={svgPaths.p3020eb00} id="Vector" stroke="var(--stroke-0, #608A8F)" strokeMiterlimit="10" strokeWidth="1.3" />
        <path d="M18.21 18.1L22.9 22.9" id="Vector_2" stroke="var(--stroke-0, #608A8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
      </g>
    </Wrapper1>
  );
}

function ItemsList() {
  return (
    <div className="absolute inset-[26.67%_63.31%_36.67%_0.02%]" data-name="Items List">
      <div className="absolute inset-[-5.91%_0_0_-15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
          <g id="Items List">
            <path d="M0.65 0.65H6.65" id="Vector" stroke="var(--stroke-0, #608A8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            <path d="M0.65 5.65H6.65" id="Vector_2" stroke="var(--stroke-0, #608A8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            <path d="M0.65 10.65H6.65" id="Vector_3" stroke="var(--stroke-0, #608A8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
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

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[86px] top-[-1px]">
      <TabBarItemActiveText text="Explore" additionalClassNames="w-[87px]" />
      <Frame />
    </div>
  );
}

function TabBarExplore() {
  return (
    <div className="absolute border-[#767676] border-[1px_0px_0px] border-solid bottom-0 h-[90px] left-0 w-[430px]" data-name="Tab bar Explore">
      <div className="absolute backdrop-blur-[5px] backdrop-filter bg-[rgba(247,246,242,0.9)] bottom-0 left-1/2 shadow-[0px_-64px_18px_0px_rgba(0,0,0,0),0px_-41px_16px_0px_rgba(0,0,0,0.01),0px_-23px_14px_0px_rgba(0,0,0,0.02),0px_-10px_10px_0px_rgba(0,0,0,0.03),0px_-3px_6px_0px_rgba(0,0,0,0.04)] top-[-1px] translate-x-[-50%] w-[430px]" data-name="Blur Layer" />
      <TabBarItemActive />
      <Frame9 />
      <Frame11 />
      <Frame8 />
      <Frame10 />
      <div className="absolute bg-black bottom-[10px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Filter() {
  return (
    <div className="absolute inset-[20%_21%_21%_20%]" data-name="Filter">
      <div className="absolute inset-[-1.6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Filter">
            <path d={svgPaths.p12224580} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="1.2" />
            <path d="M3.797 5.936H10.1987" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.2" />
            <path d="M5.223 8.78033H8.78033" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Filer() {
  return (
    <div className="mr-[-4px] relative shrink-0 size-[23px]" data-name="Filer">
      <div className="absolute bg-[rgba(234,233,229,0)] inset-0 rounded-[6px]" data-name="Platter" />
      <Filter />
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="absolute bg-[#074e59] bottom-[108px] content-stretch flex items-center justify-center left-1/2 pl-[12px] pr-[16px] py-[8px] rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.08)] translate-x-[-50%]" data-name="Primary button">
      <Filer />
      <div className="flex flex-col font-['Founders_Grotesk:Medium',sans-serif] h-[24px] justify-center leading-[0] mr-[-4px] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[0.075px] w-[53px]">
        <p className="leading-[normal]">Filters</p>
      </div>
    </div>
  );
}

export default function PlpOccasions() {
  return (
    <div className="bg-[#f7f6f2] relative size-full" data-name="PLP - Occasions">
      <Header />
      <TabBarExplore />
      <PrimaryButton />
      <Group5 />
    </div>
  );
}
export function HomeProdCats() {
  const giftCategories = [
    { name: 'Chocolates', image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/homechocs.png' },
    { name: 'Perfume', image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/homeperfume.png' },
    { name: 'Watches', image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/homewatches.png' },
    { name: 'Toys', image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/hometoys.png' },
    { name: 'Jewellery', image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/homejewellery.png' },
    { name: 'Cakes', image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/homecakes.png' },
    { name: 'Premium Gifts', image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/homegifts.png' },
    { name: 'Flower Vases', image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/homevases.png' },
  ];

  return (
    <section className="px-5 mt-8 mb-8">
      <h3
        className="mb-4"
        style={{
          fontFamily: 'var(--font-montas)',
          fontSize: '28px',
          fontWeight: 'var(--font-weight-light)',
          color: 'var(--foreground)',
        }}
      >
        Premium gifts for all
      </h3>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {giftCategories.map((item, index) => (
          <div key={index} className="flex-shrink-0 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-founders)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-normal)',
                color: 'var(--foreground)',
              }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

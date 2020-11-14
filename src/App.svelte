<script lang="ts">
	import thousands from 'thousands'

	export let seo = {
		turnover: 10000,
		clickPrice: 1000,
		workPercent: 70,
		numberOfSearches: 1000,
		percentInquiries: 5,
	};

	export let adsense = {
		turnover: 90000,
		clickPrice: 30,
		workPercent: 20,
		percentInquiries: 5,
	};

	$: adsenseHundredClickPrice = adsense.clickPrice * 100

	$: visitors = (seo.numberOfSearches / 100) * 10;
	$: percentVisitors = Math.ceil(visitors * 100) / 100;

	$: adsensePossibleTurnover = (adsense.percentInquiries / 100) * adsense.workPercent * adsense.turnover
	$: adsenseTurnover = thousands(adsensePossibleTurnover.toFixed(2).toString().replace('.', ','), '.')
	
	$: seoPossibleTurnover = (seo.percentInquiries / 100) * seo.workPercent * seo.turnover
	$: seoTurnover = thousands(seoPossibleTurnover.toFixed(2).toString().replace('.', ','), '.')

</script>

	<div class="mt-8 container mx-auto flex flex-col font-sans min-w-full">
    <h3 class="text-2xl font-bold">Google Ads beregner</h3>
    <div class="mt-2 mb-4 flex">
      <div class="space-y space-y-2 w-full">
        <label for="adsense-turnover" class="flex flex-col space-y space-y-1">
          <div>Omsætning på en opgave?</div>
          <div class="relative flex">
            <input
              bind:value={adsense.turnover}
              type="number"
              class="form-input w-full font-sans"
							id="adsense-turnover"
            />
            <div
              class="absolute inset-y-0 right-0 mr-4 flex items-center font-bold text-gray-500"
            >
              kr.
            </div>
          </div>
        </label>
        <label for="adsense-clickprice" class="flex flex-col space-y space-y-1">
          <div>Klikpris</div>
          <div class="relative flex">
            <input
              bind:value={adsense.clickPrice}
              type="number"
              class="form-input w-full font-sans"
							id="adsense-clickprice"
            />
            <div
              class="absolute inset-y-0 right-0 mr-4 flex items-center font-bold text-gray-500"
            >
              kr.
            </div>
          </div>
        </label>
        <label for="adsense-workpercent" class="flex flex-col space-y space-y-1">
          <div>Opkald til arbejde forhold</div>
          <div class="relative flex">
            <input
              bind:value={adsense.workPercent}
              type="number"
              class="form-input w-full font-sans"
							id="adsense-workpercent"
            />
            <div
              class="absolute inset-y-0 right-0 mr-4 flex items-center font-bold text-gray-500"
            >
              %
            </div>
          </div>
        </label>
        <label for="adsense-percentinquiries" class="flex flex-col space-y space-y-1">
          <div class="flex justify-between space-x space-x-2">
            % henvender sig
          </div>
          <div class="relative flex">
            <input
              bind:value={adsense.percentInquiries}
              type="number"
              class="form-input w-full font-sans"
							id="adsense-percentinquiries"
            />
            <div
              class="absolute inset-y-0 right-0 mr-4 flex items-center font-bold text-gray-500"
            >
              %
            </div>
          </div>
        </label>
      </div>
      <svg fill="currentColor" viewBox="0 0 20 20" class="w-32 text-gray-300">
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <div class="space-y space-y-2 w-full">
        <label for="adsense-hundredclickprice" class="flex flex-col space-y space-y-1">
          <div class="flex justify-between space-x space-x-2">
            Pris for 100 klik
          </div>
          <div class="relative flex">
            <input
              value={adsenseHundredClickPrice}
              type="text"
              class="form-input w-full bg-gray-200 font-sans"
              disabled
              readonly
              aria-readonly="true"
							id="adsense-hundredclickprice"
            />
            <div
              class="absolute inset-y-0 right-0 mr-4 flex items-center font-bold text-gray-500"
            >
              kr.
            </div>
          </div>
        </label>
        <label for="adsense-possibleturnover" class="flex flex-col space-y space-y-1">
          <div class="flex justify-between space-x space-x-2">
            Mulig omsætning
          </div>
          <div class="relative flex">
            <input
              value={adsenseTurnover}
              type="text"
              class="form-input w-full bg-gray-200 font-sans"
              disabled
              readonly
              aria-readonly="true"
							id="adsense-possibleturnover"
            />
            <div
              class="absolute inset-y-0 right-0 mr-4 flex items-center font-bold text-gray-500"
            >
              kr.
            </div>
          </div>
        </label>
      </div>
    </div>
    <h3 class="text-2xl font-bold">SEO beregner</h3>
    <div class="mt-2 mb-4 flex">
      <div class="space-y space-y-2 w-full">
        <label for="seo-turnover" class="flex flex-col space-y space-y-1">
          <div>Omsætning på en opgave?</div>
          <div class="relative flex">
            <input
              bind:value={seo.turnover}
              type="number"
              class="form-input w-full font-sans"
							id="seo-turnover"
            />
            <div
              class="absolute inset-y-0 right-0 mr-4 flex items-center font-bold text-gray-500"
            >
              kr.
            </div>
          </div>
        </label>
        <label for="seo-numberofsearches" class="flex flex-col space-y space-y-1">
          <div>Antal søgninger på opgaven</div>
          <div class="relative flex">
            <input
              bind:value={seo.numberOfSearches}
              type="number"
              class="form-input w-full font-sans"
							id="seo-numberofsearches"
            />
            <div
              class="absolute inset-y-0 right-0 mr-4 flex items-center font-bold text-gray-500"
            >
              %
            </div>
          </div>
        </label>
        <label for="seo-workpercent" class="flex flex-col space-y space-y-1">
          <div>Opkald til arbejde forhold</div>
          <div class="relative flex">
            <input
              bind:value={seo.workPercent}
              type="number"
              class="form-input w-full font-sans"
							id="seo-workpercent"
            />
            <div
              class="absolute inset-y-0 right-0 mr-4 flex items-center font-bold text-gray-500"
            >
              %
            </div>
          </div>
        </label>
        <label for="seo-percentinquiries" class="flex flex-col space-y space-y-1">
          <div class="flex justify-between space-x space-x-2">
            % henvender sig
          </div>
          <div class="relative flex">
            <input
              bind:value={seo.percentInquiries}
              type="number"
              class="form-input w-full font-sans"
							id="seo-percentinquiries"
            />
            <div
              class="absolute inset-y-0 right-0 mr-4 flex items-center font-bold text-gray-500"
            >
              %
            </div>
          </div>
        </label>
      </div>
      <svg fill="currentColor" viewBox="0 0 20 20" class="w-32 text-gray-300">
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <div class="space-y space-y-2 w-full">
        <label for="seo-percentvisitors" class="flex flex-col space-y space-y-1">
          <div class="flex justify-between space-x space-x-2">
            10% bliver til besøg
          </div>
          <div class="relative flex">
            <input
              value={percentVisitors}
              type="text"
              class="form-input w-full bg-gray-200 font-sans"
              disabled
              readonly
              aria-readonly="true"
							id="seo-percentvisitors"
            />
            <div
              class="absolute inset-y-0 right-0 mr-4 flex items-center font-bold text-gray-500"
            >
              #
            </div>
          </div>
        </label>
        <label for="seo-possibleturnover" class="flex flex-col space-y space-y-1">
          <div class="flex justify-between space-x space-x-2">
            Mulig omsætning
          </div>
          <div class="relative flex">
            <input
              value={seoTurnover}
              type="text"
              class="form-input w-full bg-gray-200 font-sans"
              disabled
              readonly
              aria-readonly="true"
							id="seo-possibleturnover"
            />
            <div
              class="absolute inset-y-0 right-0 mr-4 flex items-center font-bold text-gray-500"
            >
              kr.
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>

<style global>
	@tailwind base;
	@tailwind components;



	@tailwind utilities;
</style>
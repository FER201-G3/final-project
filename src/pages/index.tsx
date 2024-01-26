// UI: https://tailwindcomponents.com/component/product-page
import BaseLayout from "@/components/BaseLayout";

export default function Index() {
  return (
    <BaseLayout>
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li>
            <div className="flex items-center">
              <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                Men
              </a>
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                Clothing
              </a>
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li className="text-sm">
            <a
              href="#"
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              Basic Tee 6-Pack
            </a>
          </li>
        </ol>
      </nav>
      {/* Image gallery */}
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
            alt="Two each of gray, white, and black shirts laying flat."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
              alt="Model wearing plain black basic tee."
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
              alt="Model wearing plain gray basic tee."
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
            alt="Model wearing plain white basic tee."
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Basic Tee 6-Pack
          </h1>
        </div>
        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">$192</p>
          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {/* Active: "text-gray-900", Default: "text-gray-200" */}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="sr-only">4 out of 5 stars</p>
              <a
                href="#"
                className="ml-3 text-sm font-medium text-teal-600 hover:text-cyan-500"
              >
                117 reviews
              </a>
            </div>
          </div>
          <form className="mt-10">
            {/* Colors */}
            <div>
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <fieldset className="mt-4">
                <legend className="sr-only">Choose a color</legend>
                <div className="flex items-center space-x-3">
                  {/*
            Active and Checked: "ring ring-offset-1"
            Not Active and Checked: "ring-2"
          */}
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="White"
                      className="sr-only"
                      aria-labelledby="color-choice-0-label"
                    />
                    <span id="color-choice-0-label" className="sr-only">
                      White
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"
                    />
                  </label>
                  {/*
            Active and Checked: "ring ring-offset-1"
            Not Active and Checked: "ring-2"
          */}
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Gray"
                      className="sr-only"
                      aria-labelledby="color-choice-1-label"
                    />
                    <span id="color-choice-1-label" className="sr-only">
                      Gray
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-200"
                    />
                  </label>
                  {/*
            Active and Checked: "ring ring-offset-1"
            Not Active and Checked: "ring-2"
          */}
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Black"
                      className="sr-only"
                      aria-labelledby="color-choice-2-label"
                    />
                    <span id="color-choice-2-label" className="sr-only">
                      Black
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"
                    />
                  </label>
                </div>
              </fieldset>
            </div>
            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <a
                  href="#"
                  className="text-sm font-medium text-yellow-600 hover:text-blue-500"
                >
                  Size guide
                </a>
              </div>
              <fieldset className="mt-4">
                <legend className="sr-only">Choose a size</legend>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  {/* Active: "ring-2 ring-indigo-500" */}
                  <label className="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium uppercase text-gray-200 hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                    <input
                      type="radio"
                      name="size-choice"
                      defaultValue="XXS"
                      disabled
                      className="sr-only"
                      aria-labelledby="size-choice-0-label"
                    />
                    <span id="size-choice-0-label">XXS</span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                    >
                      <svg
                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                      >
                        <line
                          x1={0}
                          y1={100}
                          x2={100}
                          y2={0}
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </span>
                  </label>
                  {/* Active: "ring-2 ring-indigo-500" */}
                  <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                    <input
                      type="radio"
                      name="size-choice"
                      defaultValue="XS"
                      className="sr-only"
                      aria-labelledby="size-choice-1-label"
                    />
                    <span id="size-choice-1-label">XS</span>
                    {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                    <span
                      className="pointer-events-none absolute -inset-px rounded-md"
                      aria-hidden="true"
                    />
                  </label>
                  {/* Active: "ring-2 ring-indigo-500" */}
                  <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                    <input
                      type="radio"
                      name="size-choice"
                      defaultValue="S"
                      className="sr-only"
                      aria-labelledby="size-choice-2-label"
                    />
                    <span id="size-choice-2-label">S</span>
                    {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                    <span
                      className="pointer-events-none absolute -inset-px rounded-md"
                      aria-hidden="true"
                    />
                  </label>
                  {/* Active: "ring-2 ring-indigo-500" */}
                  <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                    <input
                      type="radio"
                      name="size-choice"
                      defaultValue="M"
                      className="sr-only"
                      aria-labelledby="size-choice-3-label"
                    />
                    <span id="size-choice-3-label">M</span>
                    {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                    <span
                      className="pointer-events-none absolute -inset-px rounded-md"
                      aria-hidden="true"
                    />
                  </label>
                  {/* Active: "ring-2 ring-indigo-500" */}
                  <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                    <input
                      type="radio"
                      name="size-choice"
                      defaultValue="L"
                      className="sr-only"
                      aria-labelledby="size-choice-4-label"
                    />
                    <span id="size-choice-4-label">L</span>
                    {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                    <span
                      className="pointer-events-none absolute -inset-px rounded-md"
                      aria-hidden="true"
                    />
                  </label>
                  {/* Active: "ring-2 ring-indigo-500" */}
                  <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                    <input
                      type="radio"
                      name="size-choice"
                      defaultValue="XL"
                      className="sr-only"
                      aria-labelledby="size-choice-5-label"
                    />
                    <span id="size-choice-5-label">XL</span>
                    {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                    <span
                      className="pointer-events-none absolute -inset-px rounded-md"
                      aria-hidden="true"
                    />
                  </label>
                  {/* Active: "ring-2 ring-indigo-500" */}
                  <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                    <input
                      type="radio"
                      name="size-choice"
                      defaultValue="2XL"
                      className="sr-only"
                      aria-labelledby="size-choice-6-label"
                    />
                    <span id="size-choice-6-label">2XL</span>
                    {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                    <span
                      className="pointer-events-none absolute -inset-px rounded-md"
                      aria-hidden="true"
                    />
                  </label>
                  {/* Active: "ring-2 ring-indigo-500" */}
                  <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                    <input
                      type="radio"
                      name="size-choice"
                      defaultValue="3XL"
                      className="sr-only"
                      aria-labelledby="size-choice-7-label"
                    />
                    <span id="size-choice-7-label">3XL</span>
                    {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                    <span
                      className="pointer-events-none absolute -inset-px rounded-md"
                      aria-hidden="true"
                    />
                  </label>
                </div>
              </fieldset>
            </div>
            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Add to bag
            </button>
          </form>
        </div>
        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              <p className="text-base text-gray-900">
                The Basic Tee 6-Pack allows you to fully express your vibrant
                personality with three grayscale options. Feeling adventurous?
                Put on a heather gray tee. Want to be a trendsetter? Try our
                exclusive colorway: "Black". Need to add an extra pop of color
                to your outfit? Our white tee has you covered.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Hand cut and sewn locally
                  </span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Dyed with our proprietary colors
                  </span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Pre-washed &amp; pre-shrunk
                  </span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">Ultra-soft 100% cotton</span>
                </li>
              </ul>
            </div>
          </div>
          <section aria-labelledby="shipping-heading" className="mt-10">
            <h2
              id="shipping-heading"
              className="text-sm font-medium text-gray-900"
            >
              Details
            </h2>
            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">
                The 6-Pack includes two black, two white, and two heather gray
                Basic Tees. Sign up for our subscription service and be the
                first to get new, exciting colors, like our upcoming "Charcoal
                Gray" limited release.
              </p>
            </div>
          </section>
        </div>
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          {/* Reviews */}
          <section
            aria-labelledby="reviews-heading"
            className="border-t border-gray-200 pt-10 lg:pt-16"
          >
            <h2 id="reviews-heading" className="sr-only">
              Reviews
            </h2>
            <div className="space-y-10">
              <div className="flex flex-col sm:flex-row">
                <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    This is the best white t-shirt out there
                  </h3>
                  <p className="sr-only">5 out of 5 stars</p>
                  <div className="mt-3 space-y-6 text-sm text-gray-600">
                    <p>
                      I've searched my entire life for a t-shirt that reflects
                      every color in the visible spectrum. Scientists said it
                      couldn't be done, but when I look at this shirt, I see
                      white light bouncing right back into my eyes. Incredible!
                    </p>
                  </div>
                </div>
                <div className="order-1 flex items-center sm:flex-col sm:items-start">
                  <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Mark Edwards."
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4 sm:ml-0 sm:mt-4">
                    <p className="text-sm font-medium text-gray-900">
                      Mark Edwards
                    </p>
                    <div className="mt-2 flex items-center">
                      {/* Active: "text-gray-900", Default: "text-gray-200" */}
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    Adds the perfect variety to my wardrobe
                  </h3>
                  <p className="sr-only">4 out of 5 stars</p>
                  <div className="mt-3 space-y-6 text-sm text-gray-600">
                    <p>
                      I used to be one of those unbearable minimalists who only
                      wore the same black v-necks every day. Now, I have
                      expanded my wardrobe with three new crewneck options!
                      Leaving off one star only because I wish the heather gray
                      was more gray.
                    </p>
                  </div>
                </div>
                <div className="order-1 flex items-center sm:flex-col sm:items-start">
                  <img
                    src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                    alt="Blake Reid."
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4 sm:ml-0 sm:mt-4">
                    <p className="text-sm font-medium text-gray-900">
                      Blake Reid
                    </p>
                    <div className="mt-2 flex items-center">
                      {/* Active: "text-gray-900", Default: "text-gray-200" */}
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-200"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    All good things come in 6-Packs
                  </h3>
                  <p className="sr-only">5 out of 5 stars</p>
                  <div className="mt-3 space-y-6 text-sm text-gray-600">
                    <p>
                      Tasty beverages, strong abs that will never be seen due to
                      aforementioned tasty beverages, and these Basic Tees!
                    </p>
                  </div>
                </div>
                <div className="order-1 flex items-center sm:flex-col sm:items-start">
                  <img
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Ben Russel."
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4 sm:ml-0 sm:mt-4">
                    <p className="text-sm font-medium text-gray-900">
                      Ben Russel
                    </p>
                    <div className="mt-2 flex items-center">
                      {/* Active: "text-gray-900", Default: "text-gray-200" */}
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section aria-labelledby="related-products-heading" className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2
            id="related-products-heading"
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            Customers also purchased
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men's Basic Tee in black."
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            {/* More products... */}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

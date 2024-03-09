# **THE ARC Frontend Challenge**

Hi and thank you for taking the time to complete this challenge. We hope you enjoy it!
To start your challenge, please fork this repository into your own GitHub account and follow the instructions below.

## **Developing**

Once you've forked and cloned this repo and installed dependencies with `npm install`, start a development server:

```bash
npm run dev
```

## **Notes**

### _Design_

You can find the Figma File [here](https://www.figma.com/file/7c6I9zPc9d99YrOwAx2BDl/Coding-Challenge?type=design&node-id=0%3A1&mode=design&t=YLebJl398G8r7hNz-1). The password is `Challenge2023`

### _Scope_

- You should only invest a maximum of 6hrs for the coding part of this challenge.
  Since we know that Svelte(Kit) is a new kid on the block we don't expect you to be an expert in it.

- As the scope of the design could simply blow up your invested time, it is absolutely fine if you don't complete every section.

- We are looking for a solution that is well structured, easy to understand and maintainable.
  It doesn't matter if you don't finish all the tasks, we are more interested in how you approach the problem. Be exactly as structured as you would be if it was your own project. Document exactly as it was your own project. We want to get to know you and your way of working.

- As mentioned in the [Figma file](https://www.figma.com/file/7c6I9zPc9d99YrOwAx2BDl/Coding-Challenge?type=design&node-id=0-1&mode=design&t=YLebJl398G8r7hNz-0) you don't have to implement the functionality for any button but the _**Subscribe**_ button within the newsletter section.

You can use the following Checklist to keep track of your progress:

- [ ] Create the **Hero** element

- [ ] Create the **Clients** section

- [ ] Create the **Introduction** section

- [ ] Create the **Features** section

- [ ] Create the **Pricing** section

  1. [ ] Code the UI

  2. [ ] Fetch the data from API (see below)

  3. [ ] Display the data

  4. [ ] Add loading states

- [ ] Create the **Newsletter** section

  1. [ ] Code the UI

  2. [ ] Send the data to a SvelteKit API Route

  3. [ ] Validate the Email address format (clientside and serverside)

  4. [ ] Display a success/error message

- [ ] Create the **Footer** element

### _The Technologies you will be using_

- **Svelte(Kit)** - if you haven't used it before, we recommend the [Official tutorial](https://svelte.dev/tutorial/basics)
- **TypeScript** - please use TypeScript as much as possible. In Svelte(Kit) you can use it in `.svelte` files as well by adding a `<script lang="ts">` tag
- **UnoCSS** (if you already know [TailwindCSS](https://tailwindcss.com/), you'll be fine since the syntax is almost identical) - [Official Website](https://unocss.dev/)
- Feel free to use any other library you want

---

## **API**

The API-Endpoint you will need is available at `https://n8n.thearc.dev/webhook/pricing`.

-> You can only use POST requests

-> You need to send a body that contains a json object with the key `interval` and the value `monthly` or `yearly`.

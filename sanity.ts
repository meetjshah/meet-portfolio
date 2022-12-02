import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
projectId: process.env.NEXT_PUBLIC_SANITY_PUBLIC_ID!,
apiVersion: "2021-03-25",
useCdn: process.env.NODE_ENV === "production",
};

//Setup client for fetching data in getProps page fns
export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
    createImageUrlBuilder(config).image(source);
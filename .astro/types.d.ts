declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"e-katalog-batik.md": {
	id: "e-katalog-batik.md";
  slug: "panorama-batik-e-katalog";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"guidebook-banjarejo.md": {
	id: "guidebook-banjarejo.md";
  slug: "guidebook-banjarejo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"guidebook-manisrejo.md": {
	id: "guidebook-manisrejo.md";
  slug: "guidebook-umkm-manisrejo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"guidebook-pandean.md": {
	id: "guidebook-pandean.md";
  slug: "guidebook-tempat-wisata-pandean";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"kampung-wisata-mojorejo.md": {
	id: "kampung-wisata-mojorejo.md";
  slug: "kampoeng-wisata-mojorejo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"kopi-taman.md": {
	id: "kopi-taman.md";
  slug: "5-tempat-ngopi-madiun";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"kuliner-manisrejo.md": {
	id: "kuliner-manisrejo.md";
  slug: "kuliner-umkm-manisrejo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"mural.md": {
	id: "mural.md";
  slug: "revitalisasi-mural-mojorejo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pendaftaran-umkm.md": {
	id: "pendaftaran-umkm.md";
  slug: "cara-mendaftar-umkm-di-taman";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tempat-sejarah-taman.md": {
	id: "tempat-sejarah-taman.md";
  slug: "guidebook-tempat-bersejarah-taman";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"umkm-mojorejo.md": {
	id: "umkm-mojorejo.md";
  slug: "artikel-umkm-mojorejo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"wisata-religi.md": {
	id: "wisata-religi.md";
  slug: "wisata-religi-taman";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
};
"blogCollection": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "blogCollection";
  data: InferEntrySchema<"blogCollection">;
  render(): Render[".md"];
}>;

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}

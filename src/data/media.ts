import type { ImageAsset } from "@/types";

/*
 * Central image registry — every photograph used on the site is declared here.
 * Dimensions and blur placeholders were generated from the files in public/images.
 *
 * These are royalty-free stock photographs used as stand-ins until the
 * restaurant's own photography is available. Sources and licences:
 * IMAGE_CREDITS.md at the repository root.
 */

export const images = {
  heroInterior: {
    src: "/images/hero/hero-interior.webp",
    width: 2400,
    height: 1600,
    alt: "Salle de restaurant feutrée éclairée par des lanternes marocaines ciselées",
    blurDataURL:
      "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAAAwAgCdASoQAAsAA4BaJZACdAEQFJBdWcp4AAD+9Zu+YINLe/RPyUld2FibyaEliqG/lgNmSBYDCs3gP+T17XdcoPge8taKSQuYViCU3TeiAAAA",
  },
  heroDish: {
    src: "/images/hero/hero-dish.webp",
    width: 1400,
    height: 1109,
    alt: "Couscous aux légumes servi dans un plat en céramique marocaine décorée",
    blurDataURL:
      "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAAAQAgCdASoQAA0AA4BaJQBYdiG9YxMuvsMQAP70nV+Ei8Tfqdwt+vXZm13cj2+5+iHxW6S14i8vZWQcLm/YjfQZxdqbOT5h8Hn+G5iyiwTxKhQIoSYMYFnaAAA=",
  },
  couscousRoyal: {
    src: "/images/dishes/couscous-royal.webp",
    width: 1200,
    height: 800,
    alt: "Couscous garni de légumes dans un plat en terre cuite",
    blurDataURL:
      "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAwAgCdASoQAAsAA4BaJbACdAD6RRlr1Q/gAAD+J7D57ZXxPDxqqv3CFIES/oRV4mL1PL/JYgEW6wwbZLgEb5/R3m0xa1M5PpqSR1gc51+/wn9ISMfuC4B33adqw1b7SvLRxUmhrd+hp4AA",
  },
  tajinePouletCitron: {
    src: "/images/dishes/tajine-poulet-citron.webp",
    width: 1200,
    height: 1800,
    alt: "Ragoût doré au safran servi dans un plat en terre cuite",
    blurDataURL:
      "data:image/webp;base64,UklGRqYAAABXRUJQVlA4IJoAAAAwBACdASoQABgAPu1iqU2ppaOiMAgBMB2JbACdMoAC2pVTElGdT3nHIAAAyWNv1gXqdBGg5QHNLh9znbpzsnsRQb3EuIgvuP6y8d2/WDUd01SJWwrVQx21Kf3rSMmhZS58j8HMUPMYyC7NWWG8llZgaLWY0QRqUIpflj2YlJjNGwwnL/MVtz7/xfrnPaWfNft4pOLOT1uKAAAA",
  },
  tajineKefta: {
    src: "/images/dishes/tajine-kefta.webp",
    width: 1200,
    height: 1600,
    alt: "Tajine de boulettes de viande en sauce tomate",
    blurDataURL:
      "data:image/webp;base64,UklGRqwAAABXRUJQVlA4IKAAAABwBACdASoQABUAPu1iqU2ppaOiMAgBMB2JbACdMoR3ACxuY/0rehkiV/SDAAD6hJF0BbRui7Ege4Z4v4cVQs6R+teYAmzn1toHPB/fBk0mGgiAXmZsLpAhSGeCgJEP+TO/kA8i6B4FxMwXzYx+1kC4ERyjhBoVueIqjBYGr6ht4DndzAk1EP2ao0ccZwOsL8O1w37MocuYUw1cxqyZYAAA",
  },
  pastilla: {
    src: "/images/dishes/pastilla.webp",
    width: 995,
    height: 983,
    alt: "Pastilla traditionnelle décorée de sucre glace et de cannelle",
    blurDataURL:
      "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAABQAgCdASoQABAAA4BaJbACdAYtBlKfOicp6AAA/Pu1eW3nN3z2xwQEZk4KKU1wDpF3XBj5pETAgKweVkvvGsAhogwQA5PKOzIGDVkKwPnESWxfg+srWxB147A6o6xRn/QdGgaiyR4a4NBvDCtnCUgJ762AAagA",
  },
  riadCourtyard: {
    src: "/images/restaurant/riad-courtyard.webp",
    width: 1600,
    height: 2240,
    alt: "Patio d'un riad marocain avec arcades, plantes et bassin",
    blurDataURL:
      "data:image/webp;base64,UklGRrYAAABXRUJQVlA4IKoAAAAwBACdASoQABYAPu1iqU2ppaOiMAgBMB2JZAC/OCDRIK74eYgJYzbdU4AA/okSVabveynJFxs3HqQLOq5oVjvA7i0pMwdAR2oo+xg5by0yXzkJwBA8kdAEd4Dgqq1qUIzNfJJ7zsmDKRmpdoPNj+7sG9euhaoPoXpZf0wRwsPZzgDmtkS6av3MdWHlcEO4/IrtZiDwzhWT576nRq7pGffFNkXs7bWjhTJAAA==",
  },
  mintTea: {
    src: "/images/restaurant/mint-tea.webp",
    width: 2000,
    height: 3000,
    alt: "Théière marocaine en métal argenté et verres de thé à la menthe",
    blurDataURL:
      "data:image/webp;base64,UklGRqAAAABXRUJQVlA4IJQAAABwBACdASoQABgAPu1iqU2ppaOiMAgBMB2JZACdMoADVP7p5r6Cu89DWIRwLAD+zfMaOvhgtLAZeZgyKs03mJLQ61QuVNkYwvzL5eKz3E1Uh+Xvyr+fN9GuFNJmzkDovzBZCg9t136gvtspIFJy/Uwhox1XoGvM1f3xJEFvvhM7yPLMQix+QGd6AgDIkMT/AoZQpAAA",
  },
  zelligeCourtyard: {
    src: "/images/gallery/zellige-courtyard.webp",
    width: 1400,
    height: 2100,
    alt: "Arcades sculptées et zellige d'une cour marocaine traditionnelle",
    blurDataURL:
      "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAADwAwCdASoQABgAPu1iqU2ppaQiMAgBMB2JYwCdIOZC4pULe5lgMzuoAP7zNNqvgFHzOaF2Mnax3WG/WXYHoMkz8XkV7HbELU+qdiyrZcaNY8lAUwTiPmtytSM0jC2bs9MZizO7wkXNA8c+bJIX8pxsiu+5DfmbkE+KjxFFmc891LLiQgAAAA==",
  },
  tagineZellige: {
    src: "/images/gallery/tagine-zellige.webp",
    width: 1400,
    height: 933,
    alt: "Tajine servi sur une table en carreaux de zellige colorés",
    blurDataURL:
      "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAAAQAgCdASoQAAsAA4BaJagCdH8AFWr5e/sAANttvu4zWSUqSXVXHCODXUmyOGniGeF/B/bX5+JnmbmzPs2a1ppmMrF04RpsaG7VK4heiiNYAA==",
  },
  lanterns: {
    src: "/images/gallery/lanterns.webp",
    width: 1400,
    height: 2100,
    alt: "Lanternes marocaines en métal ciselé et verre coloré",
    blurDataURL:
      "data:image/webp;base64,UklGRsQAAABXRUJQVlA4ILgAAABQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JaAC7AYuk3u/cOO0SlccP7nVAAP7o4h1VHNbtom9ZUQqfNk2TI7iYa10q0rJHGYT8qWO+mkbwbhHNoSv7l2bCM+j42xMZWOWW+9Zps+WK+S50I+RHWgh5Y0ep/tcz9pYznVWRy1+pyVaATaiS95tP0c7g8vFICLWhkPnlbj7KbKKTVX4UyGoN0GdE3uU7jrBLk9CDvis/AkXleM/WDgAA",
  },
  moroccanTable: {
    src: "/images/gallery/moroccan-table.webp",
    width: 1400,
    height: 934,
    alt: "Table marocaine dressée de nombreux plats dans un salon traditionnel",
    blurDataURL:
      "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAACQAgCdASoQAAsAA4BaJZgCdMn8IHEkjXy06yMXAAD8AcOHKPIZltYEwSb97y2wLbHFn9Oup/JcHpgpcSzRO9qBTXgDZ0hoWM2E3cCU6Da45jT/WI1O6ighaV7LBg5SHrLzTBIwLMIAAA==",
  },
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;

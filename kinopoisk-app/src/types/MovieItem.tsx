interface WatchabilityItem{
  "name"?: string,
  "logo"?: {
    "url"?: string
  },
  "url"?: string
}

interface Names{
  "name"?: string | null,
  "language"?: string | null,
  "type"?: null | string
}

interface SeasonsInfo{
  "number"?: number | null,
  "episodesCount"?: number | null
}

interface Teasers{
  "url"?: string | null,
  "name"?: string | null,
  "site"?: string | null,
  "type"?: string | null,
  "size"?: number | null
}

interface Trailers{
  "url"?: string | null,
  "name"?: string | null,
  "site"?: string | null,
  "type"?: string | null,
  "size"?: number | null,
}

interface Facts{
  "value"?: string | null,
  "type"?: string | null,
  "spoiler"?: boolean | null
}

interface SpokenLanguages{
  "name"?: string | null,
  "nameEn"?: string | null
}

interface Genres{
  "name"?: string | null
}

interface Countries{
  "name"?: string | null
}

interface Persons{
  "id"?: number | null,
  "photo"?: string | null,
  "name"?: string | null,
  "enName"?: string | null,
  "profession"?: string | null,
  "enProfession"?: string | null
}

export interface SimilarMovies{
  "id"?: number | null,
  "name"?: string | null,
  "enName"?: string | null,
  "alternativeName"?: string | null,
  "type"?: string | null,
  "poster": {
    "url": string | undefined,
    "previewUrl": string | undefined
  }
}

interface SequelsAndPrequels{
  "id"?: 0 | null,
  "name"?: string | null,
  "enName"?: string | null,
  "alternativeName"?: string | null,
  "type"?: string | null,
  "poster"?: {
    "url"?: string | null,
    "previewUrl"?: string | null
  }
}

interface ReleaseYears{
  "start"?: number | null,
  "end"?: number | null
}

interface ProductionCompanies{
  "name"?: string | null,
  "url"?: string | null,
  "previewUrl"?: string | null
}

interface Fees {
  [key:string]: {
    "value": number,
    "currency": string
  }
}

export interface MovieItem{
  "externalId"?: {
    "kpHD"?: string | null,
    "imdb"?: string | null,
    "tmdb"?: number | null
  },
  "rating": {
    "kp": number,
    "imdb": number | null,
    "filmCritics"?: number | null,
    "russianFilmCritics"?: number | null,
    "await"?: number | null
  },
  "votes"?: {
    "kp"?: number | null,
    "imdb"?: number | null,
    "filmCritics"?: number | null,
    "russianFilmCritics"?: number | null,
    "await"?: number | null
  },
  "movieLength"?: number | null,
  "id"?: number | null,
  "type"?: string | null,
  "name": string | null,
  "description"?: string | null,
  "year"?: number | null,
  "poster": {
    "url": string,
    "previewUrl": string
  },
  "alternativeName"?: null | string,
  "enName"?: null | string,
  "names"?: Names[] |[],
  "shortDescription"?: string | null,
  "slogan"?: string | null,
  "status"?: "filming" | "pre-production" | "completed" | "announced" | "post-production" | null,
  "logo"?: {
    "url": string | null
  },
  "typeNumber"?: number | null,
  "color"?: string | null,
  "videos"?: {
    "trailers"?: Trailers[] | [],
    "teasers"?: Teasers[] | []
  },
  "ratingMpaa"?: string | number | null,
  "ageRating"?: number | null,
  "countries"?: Countries[],
  "reviewInfo"?: {
    "count"?: number | null,
    "positiveCount"?: number | null,
    "percentage"?: string | null
  },
  "seasonsInfo"?: SeasonsInfo[] | [],
  "persons"?: Persons[],
  "backdrop"?: {
    "url"?: string | null,
    "previewUrl"?: string | null
  },
  "budget"?: {
    "value"?: number | null,
    "currency"?: string | null,
  },
  "premiere"?: {
    "country"?: string | null,
    "world"?: string | null,
    "russia"?: string | null,
    "digital"?: string | null,
    "cinema"?: string | null,
    "bluray"?: string | null,
    "dvd"?: string | null
  },
  "similarMovies"?: SimilarMovies[] | [],
  "imagesInfo"?: {
    "postersCount"?: number | null,
    "backdropsCount"?: number | null,
    "framesCount"?: number | null
  },
  "spokenLanguages"?: SpokenLanguages[] | [],
  "releaseYears"?: ReleaseYears[] | [],
  "sequelsAndPrequels"?: SequelsAndPrequels[] | [],
  "productionCompanies"?: ProductionCompanies[],
  "facts"?: Facts[] | [],
  "distributors"?: {
    "distributor"?: null | string,
    "distributorRelease"?: null | string
  },
  "fees"?: Fees,
  "top10"?: number | null,
  "top250"?: number | null,
  "technology"?: {
    "hasImax"?: boolean | null,
    "has3D"?: boolean | null
  },
  "images"?: {
    "framesCount"?: number | null,
    "postersCount"?: number | null
  },
  "genres"?: Genres[] | [],
  "lists"?: [] | never[],
  "updatedAt"?: string | null,
  "updateDates"?: [],
  "ticketsOnSale"?: boolean | null,
  "watchability"?: {
    "items": null | WatchabilityItem[]
  }
}

export interface MovieItemRender extends MovieItem{
  className?: string,
} 

















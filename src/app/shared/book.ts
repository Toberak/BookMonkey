import { Thumbnail } from './thumbnail';



// using an interface for domain models.
// Das Interface verspricht per Vertrag, dass es ein bestimmtes Objekt die benötigte Struktur besitzt (Ducktyping)
// Domainmodels beschreiben die Geschäftslogik im Backend
// Ans Frontend wird lediglich ein einfaches Datenmodell übertragen
export interface Book {

  isbn: string;
  title: string;
  authors: string[];
  published: Date;
  subtitle?: string;
  rating?: number;
  thumbnails?: Thumbnail[];
  description?: string;

}

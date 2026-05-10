import { CatalogPage } from "./CatalogPage";
import type { CatalogPageId } from "@/config/catalogConfig";

// страница каталога сувениров
export const SouvenirsPage = () => {
    return <CatalogPage pageId={'souvenirs' satisfies CatalogPageId}></CatalogPage>
}
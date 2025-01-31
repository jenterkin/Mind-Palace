import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import MyBreadcrumbs from "./quartz/components/custom/MyBreadcrumbs"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      LinkedIn: "https://www.linkedin.com/in/jordan-enterkin-40363650/",
      Email: "mailto:jordan.a.enterkin@gmail.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    MyBreadcrumbs({
      rootName: "public",
      preSymbol: "~/",
      spacerSymbol: "/",
      processCrumb: crumb => crumb.replace(/ /g, "_").toLowerCase()
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    MyBreadcrumbs({
      rootName: "public",
      preSymbol: "~/",
      spacerSymbol: "/",
      processCrumb: crumb => crumb.replace(/ /g, "_").toLowerCase()
    }),
    Component.ArticleTitle(),
    Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}

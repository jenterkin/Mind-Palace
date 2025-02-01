---
title: Emulate Linux Path Style in Breadcrumb Menu
description: 
permalink: 58114579-8F36-49BE-A175-B2536457C1AF
draft: false
date: 2025-01-31
tags:
  - projects/site/quartz
---
I want the breadcrumb menu to look like a Linux path. All that needs to happen here is
- Adding `~/` to the beginning of the menu
- Lower-case every character
- Replace all spaces with underscores
- Replace the default separator with `/`

And when all that is done I should upstream my changes.

# Steps

## Support new `preSymbol` prop in `Breadcrumb` component

> [!todo]-
> - [ ] Add support for new optional `preSymbol` prop in the `Breadcrumb` component

This will allow me to add `~/` to the beginning of the breadcrumb menu.

I need to add a new optional prop to `Breadcrumb` called `preSymbol`. If set, simply add a separator to the beginning using the value defined in the prop.

I actually already did this, but I copy+pasted the `Breadcrumb` component to a custom `MyBreadcrumb` component, so I just need to port the changes to the official component, replace my custom component in `quartz.layout.ts`, and delete the `MyBreadcrumb` component.

## Support new `formatCrumb` prop to allow formatting each crumbs' display name

> [!todo]-
> - [ ] Add support for new optional `formatCrumb` callback prop in the breadcrumb component

This callback just needs to take in a string and return a string. This function should be used to generate the text displayed for each crumb.

`formatCrumb` will allow me to lowercase all crumbs and replace all spaces with underscores.

## Clean up custom `MyBreadcrumb` component

> [!todo]-
> - [ ] Delete my custom `MyBreadcrumb` component and replace with updated `Breadcrumb`
> - [ ] Set `preSymbol` to `~/` in each `Breadcrumb` instantiation in `quartz.layout.ts`
> - [ ] Set `formatCrumb` prop in each `Breadcrumb` instantiation in `quartz.layout.ts` to lowercase all crumbs and replace all spaces with underscores
> - [ ] Set `separator` prop in each `Breadcrumb` to `/`

Since I already implemented all of this in a custom component and am now porting it to the official component, I need to delete the custom component and replace its' usage in `quartz.layout.ts` with the official component.

## Upstream changes

> [!todo]-
> - [ ] Upstream `preSymbol` prop in `Breadcrumb` component
> - [ ] Upstream `formatCrumb` prop in `Breadcrumb` component

### `preSymbol` Prop in `Breadcrumb` component

### `formatCrumb` Prop in `Breadcrumb` component
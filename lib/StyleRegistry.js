'use client'
import React from 'react';
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
/*
 *create a global registry component to collect all CSS style rules
 *generated during a render, and a function to return those rules. Then
 *use the useServerInsertedHTML hook to inject the styles collected in the
 *registry into the <head> HTML tag in the root layout.
 */

export default function StyledComponentsRegistry({children}){

    //Creates a stylesheet once using lazy-initial-state
    const [styledComponentsStyleSheet] = React.useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement()
        styledComponentsStyleSheet.instance.clearTag()
        return <>{styles}</>
      });

      if (typeof window !== 'undefined') return <>{children}</>;

      return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
          {children}
        </StyleSheetManager>
      );
}
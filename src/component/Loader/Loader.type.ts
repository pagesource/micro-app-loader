import { ReactNode } from "react";

export interface LoaderProps{

        url: string,
        selector?: string,
        loading?: ReactNode,
        deferloading?:boolean,
        namespace: string,
        appdata?: object,
        identifier: string,
      
}
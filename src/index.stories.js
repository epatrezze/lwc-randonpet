/**
 * @file index.stories.js - Configuração de demonstração do componente App
 * @description Arquivo de configuração para demonstrar o componente App em ambiente de desenvolvimento
 * @author WCD
 * @version 1.0.0
 */

import "@lwc/synthetic-shadow";
import "https://unpkg.com/@salesforce-ux/design-system@2.13.1/assets/styles/salesforce-lightning-design-system.min.css";
import { createElement } from "lwc";
import App from "./app";

export const story = () => createElement("c-app", { is: App });

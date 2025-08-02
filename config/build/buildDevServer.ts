import { Configuration as devServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export default function buildDevServer(
  options: BuildOptions
): devServerConfiguration {
  const { port } = options;
  return {
    open: true,
    port,
    historyApiFallback: true,
    hot: true,
  };
}

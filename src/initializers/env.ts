import yenv from "yenv";
import lodash from "lodash";
import BigNumber from "bignumber.js";

const env = yenv("env.yaml");
Object.keys(env).forEach((key) => {
  if (lodash.isNil(process.env[key])) {
    // process.env only allows string-to-string mapping
    if (lodash.isArray(env[key]) || lodash.isObject(env[key])) {
      process.env[key] = JSON.stringify(env[key]);
    } else if (lodash.isNil(env[key])) {
      return; // continue
    } else {
      process.env[key] = env[key];
    }
  }
});

BigNumber.config({ EXPONENTIAL_AT: 1e9, DECIMAL_PLACES: 24 });

import { getStringValue } from '@/application/config/utils';

interface ApiConfig {
  endpoint: string;
}

interface AppConfig {
  api: ApiConfig;
}

const config: AppConfig = {
  api: {
    endpoint: getStringValue(process.env.NEXT_PUBLIC_API_ENDPOINT),
  },
};

export default config;

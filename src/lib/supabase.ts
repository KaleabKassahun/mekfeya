import type { SupabaseClient } from '@supabase/supabase-js';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createClient } from '@supabase/supabase-js';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const isSupabase = CONFIG.auth.method === 'supabase';

const supabaseUrl = CONFIG.supabase.url;
const supabaseKey = CONFIG.supabase.key;

export const supabase = isSupabase
  ? createClient(supabaseUrl, supabaseKey)
  : ({} as SupabaseClient<any, 'public', any>);

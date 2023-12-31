import { Category } from '@/lib/types';

const URL = process.env.NEST_API_URL
  ? `${process.env.NEST_API_URL}/category`
  : (() => {
      throw new Error('ENV variable not set');
    })();

export const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL, { cache: 'no-store' });
    if (!res.ok) throw new Error('Request failed');

    const data: Category[] = await res.json();
    return data;
  } catch (error) {
    throw new Error('Failed to get categories');
  }
};

export const fetchApodData = async (date: string) => {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}`);
      if (!response.ok) {
        throw new Error('Error al obtener datos de APOD');
      }
      const apodData = await response.json();
      return apodData;
    } catch (error) {
      throw error;
    }
  };
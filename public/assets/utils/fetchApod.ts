export const fetchApodData = async (date: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/nasaApi?date=${date}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Error al obtener datos de APOD desde el servidor');
    }

    const apodData = await response.json();
    return apodData;
  } catch (error) {
    throw error;
  }
};

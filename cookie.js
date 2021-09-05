const getCookie = name => {
      const cookie = docuemnt.cookie;
      const allCoolie = cookie.split('; ');
      const findCookie = allCookie.find(c => c.includes(name));
      if (findCookie) {
            'country=US'
            const cookieNameValue = findCookie.split('=');
            return cookieNameValue[1];
      }
}
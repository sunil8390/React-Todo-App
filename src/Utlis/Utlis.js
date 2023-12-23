export const GetStatus = (index) => {
    switch (index) {
      case 0:
        return "Not Started";
      case 1:
        return "In Process";
      case 2:
        return "Completed";
      default:
        return null;
    }
  };
  
  
const API_URL = 'https://localhost:5000/api';
const MQTT_URL = 'https://localhost:5001/mqtt';


console.log('Before change event');

$('#new_device_floor').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#new_device_room');

  rooms.empty();

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/rooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});

$('#remove_floor').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#remove_room');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/rooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});


$('#d_1_floor').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#d_1_room');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/rooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});





$('#d_2_floor').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#d_2_room');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/rooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});

$('#d_3_floor').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#d_3_room');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/rooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});


$('#d_1_room').on('change',function() {
  if ($('#d_1_room') != undefined && $('#d_1_floor') != undefined && ('#d_1_type') != undefined) {
    const devices = $('#d_1_device');
    console.log("yes, I am here");
    devices.empty();
    
    const floor = $('#d_1_floor').val();
    const room = $('#d_1_room').val();
    const type = $('#d_1_type').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/remove?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});



$('#d_2_room').on('change',function() {
  if ($('#d_2_room') != undefined && $('#d_2_floor') != undefined && ('#d_2_type') != undefined) {
    const devices = $('#d_2_device');
    console.log("yes, I am here");
    devices.empty();
    
    const floor = $('#d_2_floor').val();
    const room = $('#d_2_room').val();
    const type = $('#d_2_type').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/remove?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});

$('#d_3_room').on('change',function() {
  if ($('#d_3_room') != undefined && $('#d_3_floor') != undefined && ('#d_3_type') != undefined) {
    const devices = $('#d_3_device');
    console.log("yes, I am here");
    devices.empty();
    
    const floor = $('#d_3_floor').val();
    const room = $('#d_3_room').val();
    const type = $('#d_3_type').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/remove?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});

$('#d_data_floor').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#d_data_room');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/rooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});


$('#d_data_button').on('click', function() {
  var floor = $('#d_data_floor').val();
  var room = $('#d_data_room').val();
  var type = $('#d_data_type').val();
  var name = $('#d_data_device').val();
  if ($('#d_data_room') != undefined && $('#d_data_floor') != undefined && ('#d_data_type') != undefined && ('#d_data_device') != undefined) {
    $.ajax({
    url: `${API_URL}/th?floor=${floor}&room=${room}&name=${name}`,
    method: 'GET',
    success: (data) => {
      $('#dataContainer').empty();
      $('#dataContainer').append(`<h2>Device Data</h2><label>Name: ${name}</label><br><label>Type: ${type}</label><br><label>Floor: ${floor}</label><br><label>Room: ${room}</label><br><label>Gas Data: ${data.gas}</label><br><br><label>Humidity Data: ${data.humid}</label><br>`);
      var chartOptions = {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Device Data'
        },
        xAxis: {
          categories: 'DEVICE'
        },
        yAxis: {
          title: {
            text: 'Data'
          }
        },
        series: [{
          name: 'Humidity',
          data: data.humid
        },
        {
          name: 'Gas',
          data: data.gas
        }
      ]
      };
      $(document).ready(function() {      $('#graph').highcharts(chartOptions);
    });
    },
    error: (err) => {
      console.log('Error retrieving headings:', err);
    }
  });
  }

  
});


$('#add_device_button').on('click', function(){
    var name = $('#new_device_name').val();
    var floor = $('#new_device_floor').val();
    var room = $('#new_device_room').val();
    var type = $('#new_device_type').val();
    console.log("yep, yep");
    console.log(name);
    console.log(room);
    console.log(floor);
    console.log(type);
    if (type == '1') {
        $.ajax({
            url: `${API_URL}/lighting`,
            type: "POST",
            data: {
              name: name, 
              floor: floor,
              room: room 
            },
            success: function(response) {
              console.log(response); 
            },
            error: function(xhr, status, error) {
              console.log("Error: " + error); 
            }
        });
    }
    else if(type == '2'){
        $.ajax({
            url: `${API_URL}/aircond`,
            type: "POST",
            data: {
              name: name, 
              floor: floor,
              room: room 
            },
            success: function(response) {
              console.log(response); 
            },
            error: function(xhr, status, error) {
              console.log("Error: " + error); 
            }
        });
    }
    else if(type == '3'){
        $.ajax({
            url: `${API_URL}/security`,
            type: "POST",
            data: {
              name: name, 
              floor: floor,
              room: room 
            },
            success: function(response) {
              console.log(response); 
            },
            error: function(xhr, status, error) {
              console.log("Error: " + error); 
            }
        });
    }

    $('#new_device_floor').val("");
});

$('#d_data_room').on('change',function() {
  if ($('#d_data_room') != undefined && $('#d_data_floor') != undefined && ('#d_data_type') != undefined) {
    const devices = $('#d_data_device');
    console.log("yes, I am here");
    devices.empty();
    
    const floor = $('#d_data_floor').val();
    const room = $('#d_data_room').val();
    const type = $('#d_data_type').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/remove?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});


$('#remove_room').on('change',function() {
  if ($('#remove_floor') != undefined && $('#remove_room') != undefined && ('#remove_device_type') != undefined) {
    const devices = $('#remove_device');
    console.log("yes, I am here");
    devices.empty();
    
    const floor = $('#remove_floor').val();
    const room = $('#remove_room').val();
    const type = $('#remove_device_type').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/remove?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});


$('#remove_device_button').on('click', function () {
  const type = $('#remove_device_type').val();
  const floor = $('#remove_floor').val();
  const room = $('#remove_room').val();
  const device = $('#remove_device').val();

  if (type && floor && room && device) {
    $.ajax({
      url: `${API_URL}/remove`,
      type: 'DELETE',
      data: { type: type, floor: floor, room: room, device: device },
      success: function () {
        console.log('Device removed successfully');
        $('#remove_floor').val("");
  
      },
      error: function (xhr, status, error) {
        console.error('Error removing device:', error);
      }
    });
  } else {
    console.error('Missing required fields');
  }
});

$('#d_pref').on('click', function () {
  const type1 = $('#d_1_type').val();
  const floor1 = $('#d_1_floor').val();
  const room1 = $('#d_1_room').val();
  const device1 = $('#d_1_device').val();
  const type2 = $('#d_2_type').val();
  const floor2 = $('#d_2_floor').val();
  const room2 = $('#d_2_room').val();
  const device2 = $('#d_2_device').val();
  const type3 = $('#d_3_type').val();
  const floor3 = $('#d_3_floor').val();
  const room3 = $('#d_3_room').val();
  const device3 = $('#d_3_device').val();

  if (type1 && floor1 && room1 && device1 && type2 && floor2 && room2 && device2 && type3 && floor3 && room3 && device3) {
    $.ajax({
      url: `${MQTT_URL}/pref`,
      type: 'POST',
      data: { d1:{type: type1, floor: floor1, room: room1, device: device1}, d2:{type: type2, floor: floor2, room: room2, device: device2}, d3:{type: type3, floor: floor3, room: room3, device: device3}},
      success: function () {
        console.log('Pref set, successfully');
        // $('#remove_floor').val("");
  
      },
      error: function (xhr, status, error) {
        console.error('Error pref device:', error);
      }
    });
  } else {
    console.error('Missing required fields');
  }
});

$(document).ready(function() {
    const table = $('#lighting_table');
    console.log('yep')
    $.ajax({
      url: `${API_URL}/lighting`,
      method: 'GET',
      success: function(data) {
        data.forEach(function(lighting) {
          const row = $('<tr></tr>');
          $('<td></td>').text(lighting.name).appendTo(row);
          $('<td></td>').text(lighting.room).appendTo(row);
          $('<td></td>').text(lighting.floor).appendTo(row);
          $('<td></td>').text(lighting.status).appendTo(row);
          table.append(row);
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('Error:', errorThrown);
      }
    });
  });
  
  $('#new_device_floor').on('change', function() {

  });

  $(document).ready(function() {
    const table = $('#security_table');
    console.log('yep')
    $.ajax({
      url: `${API_URL}/security`,
      method: 'GET',
      success: function(data) {
        data.forEach(function(lighting) {
          const row = $('<tr></tr>');
          $('<td></td>').text(lighting.name).appendTo(row);
          $('<td></td>').text(lighting.room).appendTo(row);
          $('<td></td>').text(lighting.floor).appendTo(row);
          $('<td></td>').text(lighting.status).appendTo(row);
          table.append(row);
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('Error:', errorThrown);
      }
    });
  });
  
  $(document).ready(function() {
    const table = $('#acond_table');
    console.log('yep')
    $.ajax({
      url: `${API_URL}/aircond`,
      method: 'GET',
      success: function(data) {
        data.forEach(function(lighting) {
          const row = $('<tr></tr>');
          $('<td></td>').text(lighting.name).appendTo(row);
          $('<td></td>').text(lighting.room).appendTo(row);
          $('<td></td>').text(lighting.floor).appendTo(row);
          $('<td></td>').text(lighting.status).appendTo(row);
          table.append(row);
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('Error:', errorThrown);
      }
    });
  });

// 
// 
// 
// 

// mqtt stuff

$('#send-command').on('click', function() {
  const deviceId = $('#deviceId').val();
  const command = $('#command').val();
  $.post(MQTT_URL, { deviceId, command })
  .then(response => {
  location.href = '/';
      })
      });





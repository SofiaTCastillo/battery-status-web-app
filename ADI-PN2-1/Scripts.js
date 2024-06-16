// script.js
document.addEventListener('DOMContentLoaded', function() {
    function handleBatteryChange(battery) {
        if (battery.charging || battery.level > 0.1) {
            // Reactivar animaciones
            document.querySelector('.animation').classList.remove('disabled');
        } else {
            // Desactivar animaciones
            document.querySelector('.animation').classList.add('disabled');
        }
    }

    navigator.getBattery().then(function(battery) {
        // Inicialización
        handleBatteryChange(battery);

        // Evento de cambio de batería
        battery.addEventListener('chargingchange', function() {
            handleBatteryChange(battery);
        });

        battery.addEventListener('levelchange', function() {
            handleBatteryChange(battery);
        });
    });
});

function area_square (phase_size) {
    return phase_size * phase_size;
}

function perimeter_circle(r) {
    return 2 * r * Math.PI;
}

module.exports = { area_square, perimeter_circle };
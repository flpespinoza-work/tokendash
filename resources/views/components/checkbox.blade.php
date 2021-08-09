@props([
    'checked' => false,
    'label' => '',
    'inline' => false
])

<div class="flex items-center">
    <label for="">{{ $label }}</label>
    <input
    type="checkbox"
    name=""
    id=""
    class="border-2 border-gray-200 rounded-sm hover:bg-orange checked:bg-orange focus:ring-gray-50"
    >
</div>

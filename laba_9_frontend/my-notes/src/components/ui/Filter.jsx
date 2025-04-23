// import { Input, Select } from "@chakra-ui/react";

// export default function Filters({ filter, setFilter }) {
//     return(
//         <div className="flex flex-col gap-5">
//             <Input 
//                 placeholder="Поиск" 
//                 onChange={(e) => setFilter({ ... filter, search: e.target.value })}
//             />
//             <Select
//                 onChange={(e) => setFilter({ ... filter, sortOrder: e.target.value })}
//             >
//                 <option>Сначала новые</option>
//                 <option>Сначала старые</option>
//             </Select>
//         </div>
//     )
// }




















import { createListCollection, Input, Portal, Select } from "@chakra-ui/react";

export default function Filters({ filter, setFilter }) {

  // const handleSearchChange = (e) => {
  //   setFilter({ ...filter, search: e.target.value });
  // };

  // const handleSortChange = (e) => {
  //   setFilter({ ...filter, sortOrder: e.target.value });
  // };

  


  return (
    <div className="flex flex-col gap-5">
      <Input
        placeholder="Поиск"
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      <Select.Root
        // value={filter.sortOrder}  // добавляем значение для sortOrder
        // onChange={(e) => setFilter({ ...filter, sortOrder: e.target.value })}
        collection={frameworks}
        size="sm"
        width="320px"
        onValueChange={(value) => setFilter({ ...filter, sortOrder: value })}
      >
        <Select.HiddenSelect />
        <Select.Label>Выбрать фильтры</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Выберите порядок" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {frameworks.items.map((framework) => (
                <Select.Item item={framework} key={framework.value}>
                  {framework.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </div>
  );
}

const frameworks = createListCollection({
  items: [
    { label: "Сначала новые", value: "Сначала новые" },
    { label: "Сначала старые", value: "Сначала старые" },
  ],
});






// import { createListCollection, Input, Portal, Select } from "@chakra-ui/react";

// export default function Filters({ filter, setFilter }) {

//   const handleSearchChange = (e) => {
//     setFilter({ ...filter, search: e.target.value });
//   };

//   return (
//     <div className="flex flex-col gap-5">
//       <Input
//         placeholder="Поиск"
//         value={filter.search} // сохраняем значение для поиска
//         onChange={handleSearchChange}
//       />
//       <Select.Root
//         value={filter.sortOrder}  // Устанавливаем текущее значение для sortOrder
//         onValueChange={(value) => setFilter({ ...filter, sortOrder: value })} // Обновляем состояние фильтра
//         size="sm"
//         width="320px"
//       >
//         <Select.HiddenSelect />
//         <Select.Label>Выбрать фильтры</Select.Label>
//         <Select.Control>
//           <Select.Trigger>
//             <Select.ValueText placeholder="Выберите порядок" />
//           </Select.Trigger>
//           <Select.IndicatorGroup>
//             <Select.Indicator />
//           </Select.IndicatorGroup>
//         </Select.Control>
//         <Portal>
//           <Select.Positioner>
//             <Select.Content>
//               {frameworks.items.map((framework) => (
//                 <Select.Item item={framework} key={framework.value}>
//                   {framework.label}
//                   <Select.ItemIndicator />
//                 </Select.Item>
//               ))}
//             </Select.Content>
//           </Select.Positioner>
//         </Portal>
//       </Select.Root>
//     </div>
//   );
// }

// const frameworks = createListCollection({
//   items: [
//     { label: "Сначала новые", value: "desc" },  // исправил value на "desc"
//     { label: "Сначала старые", value: "asc" },  // исправил value на "asc"
//   ],
// });




















// import { Input, Select } from "@chakra-ui/react";

// export default function Filters({ filter, setFilter }) {
//   const handleSearchChange = (e) => {
//     setFilter({ ...filter, search: e.target.value });
//   };

//   const handleSortChange = (e) => {
//     setFilter({ ...filter, sortOrder: e.target.value });
//   };

//   return (
//     <div className="flex flex-col gap-5">
//       <Input
//         placeholder="Поиск"
//         value={filter.search} // сохраняем значение для поиска
//         onChange={handleSearchChange}
//       />
//       <Select
//         value={filter.sortOrder} // сохраняем значение для сортировки
//         onChange={handleSortChange}
//         size="sm"
//         width="320px"
//       >
//         <option value="desc">Сначала новые</option>
//         <option value="asc">Сначала старые</option>
//       </Select>
//     </div>
//   );
// }
